# syntax=docker/dockerfile:1.7

# Arguments with default value (for build).
ARG PLATFORM=linux/amd64
ARG DISTROLESS_TAG=nonroot
ARG NODE_VERSION=22

# ------------------------------------------------------------------------------
# Base image with pnpm package manager.
# ------------------------------------------------------------------------------
FROM --platform=${PLATFORM} node:${NODE_VERSION}-trixie AS base
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0 COREPACK_INTEGRITY_KEYS=0 PNPM_HOME="/pnpm"
ENV CI=true LEFTHOOK=0 PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=true PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest-10 --activate

# Add tini for signal handling and zombie reaping
RUN set -eux; \
    TINI_DOWNLOAD_URL="https://github.com/krallin/tini/releases/download/v0.19.0" \
    ARCH="$(dpkg --print-architecture)"; \
    case "${ARCH}" in \
      amd64|x86_64) TINI_BIN_URL="${TINI_DOWNLOAD_URL}/tini" ;; \
      arm64|aarch64) TINI_BIN_URL="${TINI_DOWNLOAD_URL}/tini-arm64" ;; \
      *) echo "unsupported architecture: ${ARCH}"; exit 1 ;; \
    esac; \
    curl -fsSL "${TINI_BIN_URL}" -o /usr/bin/tini; \
    chmod +x /usr/bin/tini

WORKDIR /srv

# ------------------------------------------------------------------------------
# Install dependencies and build the application.
# ------------------------------------------------------------------------------
FROM base AS builder

# Copy the source files
COPY --chown=node:node . .

# Install dependencies and build the application.
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install \
    --ignore-scripts --frozen-lockfile && NODE_ENV=production pnpm build

# ------------------------------------------------------------------------------
# Cleanup the builder stage and create data directory.
# ------------------------------------------------------------------------------
FROM base AS pruner

# Copy only necessary files from builder stage
COPY --from=builder /srv/.next/standalone /srv
COPY --from=builder /srv/.next/static /srv/.next/static
COPY --from=builder /srv/public /srv/public

# Set permissions for the public directory and the server.js file.
RUN chmod -R 0775 /srv/public && chmod +x /srv/server.js

# ------------------------------------------------------------------------------
# Production image, copy build output files and run the application.
# ------------------------------------------------------------------------------
FROM --platform=${PLATFORM} busybox:stable-glibc AS glibc
FROM --platform=${PLATFORM} gcr.io/distroless/nodejs${NODE_VERSION}-debian12:${DISTROLESS_TAG}

# Read application environment variables
ARG NEXT_PUBLIC_BASE_URL

# Copy the build output files from the pruner stage.
COPY --chown=nonroot:nonroot --from=pruner /srv /srv

# Copy some necessary system utilities from previous stage.
# To enhance security, consider avoiding the copying of sysutils.
COPY --from=base /usr/bin/tini /usr/bin/tini
COPY --from=glibc /bin/hostname /bin/hostname

# @ref: https://www.akamas.io/resources/tuning-nodejs-v8-performance-efficiency
ENV NODE_OPTIONS="--max-old-space-size=2048"
ENV NODE_OPTIONS=$NODE_OPTIONS NODE_ENV=production

# Define the host and port to listen on.
ARG HOSTNAME=0.0.0.0 PORT=3000
ENV HOSTNAME=$HOSTNAME PORT=$PORT
ENV TINI_SUBREAPER=true
ENV PATH="/nodejs/bin:$PATH"

WORKDIR /srv
USER nonroot:nonroot
EXPOSE $PORT/tcp

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "--max-heap-size=2048", "server.js"]
