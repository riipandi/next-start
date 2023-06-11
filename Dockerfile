# syntax=docker/dockerfile:1.4

FROM node:20-alpine3.18 as base
ENV NEXT_TELEMETRY_DISABLED 1
RUN apk update && apk add --no-cache jq
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

# -----------------------------------------------------------------------------
# Build the application
# -----------------------------------------------------------------------------
FROM base AS builder
COPY --chown=node:node . .
RUN pnpm install --no-optional && pnpm build
RUN pnpm prune --no-optional --prod

# -----------------------------------------------------------------------------
# Production dependencies
# -----------------------------------------------------------------------------
FROM base AS pruned
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-lock.yaml
RUN pnpm install --no-optional --frozen-lockfile --prod

# -----------------------------------------------------------------------------
# Production image, copy all the files and run the application
# -----------------------------------------------------------------------------
FROM base AS runner
LABEL org.opencontainers.image.source="https://github.com/riipandi/next-start"

ARG NODE_ENV production
ARG DATABASE_URL

ENV NODE_ENV $NODE_ENV
ENV DATABASE_URL $DATABASE_URL

# Copy dependencies from pruned stage
COPY --from=pruned /app/package.json /app/package.json
COPY --from=pruned /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --from=pruned /app/node_modules /app/node_modules
# Automatically leverage output traces to reduce image size (https://s.id/1Gplb)
COPY --from=builder /app/next.config.js /app/next.config.js
COPY --from=builder /app/public /app/public
COPY --from=builder /app/.next /app/.next

EXPOSE 3000

CMD ["pnpm", "start"]
