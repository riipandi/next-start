# syntax=docker/dockerfile:1.4

ARG DATABASE_URL
ARG NEXT_PUBLIC_SITE_URL
ARG HOSTNAME localhost

# -----------------------------------------------------------------------------
# This is base image with `pnpm` package manager
# -----------------------------------------------------------------------------
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apk update && apk add --no-cache jq libc6-compat
RUN corepack enable && corepack prepare pnpm@latest-8 --activate
WORKDIR /app

# -----------------------------------------------------------------------------
# Build the application
# -----------------------------------------------------------------------------
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED 1

ENV DATABASE_URL $DATABASE_URL
ENV NEXT_PUBLIC_SITE_URL $NEXT_PUBLIC_SITE_URL

COPY --chown=node:node . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm add sharp
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --no-optional
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm build

# Install dependencies for production
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# -----------------------------------------------------------------------------
# Production image, copy build output files and run the application
# -----------------------------------------------------------------------------
FROM node:20-alpine AS runner
LABEL org.opencontainers.image.source="https://github.com/riipandi/next-start"

ENV DATABASE_URL $DATABASE_URL
ENV NEXT_PUBLIC_SITE_URL $NEXT_PUBLIC_SITE_URL

ENV HOSTNAME $HOSTNAME
ENV NODE_ENV production
ENV PORT 3000

WORKDIR /app

# Don't run production as root, spawns command as a child process.
RUN addgroup --system --gid 1001 nonroot && adduser --system --uid 1001 nonroot
RUN apk update && apk add --no-cache tini
USER nonroot:nonroot

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nonroot:nonroot /app/.next/standalone ./
COPY --from=builder --chown=nonroot:nonroot /app/.next/static ./.next/static
COPY --from=builder --chown=nonroot:nonroot /app/public ./public
COPY --from=builder --chown=nonroot:nonroot /app/next.config.mjs .

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "server.js"]
