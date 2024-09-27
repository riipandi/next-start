# syntax=docker/dockerfile:1.7

# Arguments with default value (for build).
ARG RUN_IMAGE=gcr.io/distroless/nodejs20-debian12
ARG PLATFORM=linux/amd64
ARG NODE_VERSION=20

# -----------------------------------------------------------------------------
# Base image with pnpm package manager.
# -----------------------------------------------------------------------------
FROM --platform=$PLATFORM node:${NODE_VERSION}-bookworm-slim AS base
ENV PNPM_HOME="/pnpm" PATH="$PNPM_HOME:$PATH" COREPACK_ENABLE_DOWNLOAD_PROMPT=0
ENV LEFTHOOK=0 PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=true NEXT_TELEMETRY_DISABLED=1
RUN corepack enable && corepack prepare pnpm@latest-9 --activate
WORKDIR /srv

# -----------------------------------------------------------------------------
# Install dependencies and some toolchains.
# -----------------------------------------------------------------------------
FROM base AS builder

# Required for building the application.
ARG APP_BASE_URL=http://localhost:3000
ENV APP_BASE_URL=$APP_BASE_URL

# Copy the source files
COPY --chown=node:node . .

RUN apt update && apt -yqq install tini jq
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install \
  --ignore-scripts && pnpm add sharp && pnpm build --verbose

# -----------------------------------------------------------------------------
# Compile the application and install production only dependencies.
# -----------------------------------------------------------------------------
FROM base AS pruner

# Required generated files
COPY --from=builder /srv/.next/standalone /srv/.next/standalone
COPY --from=builder /srv/.next/static /srv/.next/standalone/.next/static

# Required metadata files
COPY --from=builder /srv/package.json /srv/package.json
COPY --from=builder /srv/pnpm-lock.yaml /srv/pnpm-lock.yaml
COPY --from=builder /srv/.npmrc /srv/.npmrc

# Install production dependencies and cleanup node_modules.
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install \
  --prod --frozen-lockfile --ignore-scripts && pnpm prune --prod \
  --ignore-scripts && pnpm dlx clean-modules clean --directory \
  ".next/standalone/node_modules" --yes

# -----------------------------------------------------------------------------
# Production image, copy build output files and run the application.
# -----------------------------------------------------------------------------
FROM --platform=$PLATFORM $RUN_IMAGE AS runner
LABEL org.opencontainers.image.source="https://github.com/riipandi/next-start"

# ----- Read application environment variables --------------------------------

ARG APP_BASE_URL=http://localhost:3000
ENV APP_BASE_URL=$APP_BASE_URL

# ----- Read application environment variables --------------------------------

# Copy the build output files from the pruner stage.
# Automatically leverage output traces to reduce image size
# @ref: https://nextjs.org/docs/app/api-reference/next-config-js/output
COPY --from=pruner /srv/.next/standalone /srv
COPY --from=builder /srv/public /srv/public
COPY --from=builder /srv/next.config.mjs /srv/next.config.mjs
COPY --from=builder /srv/scripts/cache-handler.mjs /srv/scripts/cache-handler.mjs

# Copy some utilities from builder image.
COPY --from=builder /usr/bin/tini /usr/bin/tini

# Define the host and port to listen on.
ARG NODE_ENV=production HOSTNAME=0.0.0.0 PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1 TINI_SUBREAPER=true
ENV NODE_ENV=$NODE_ENV HOSTNAME=$HOST PORT=$PORT

WORKDIR /srv
USER nonroot:nonroot
EXPOSE $PORT

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["/nodejs/bin/node", "/srv/server.js"]
