# syntax=docker/dockerfile:1

FROM cgr.dev/chainguard/node:18 AS base
LABEL org.opencontainers.image.source="https://github.com/riipandi/next-start"
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm config set update-notifier false && npm config set fund false &&\
 npm config set progress true && npm config set loglevel error

# -----------------------------------------------------------------------------
# Build the application
# -----------------------------------------------------------------------------
FROM base AS builder
COPY --chown=node:node . .
RUN npm install --no-audit && npm run build

# -----------------------------------------------------------------------------
# Production dependencies
# -----------------------------------------------------------------------------
FROM base AS deps
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
RUN npm install --no-audit --omit=dev

# -----------------------------------------------------------------------------
# Production image, copy all the files and run the application
# -----------------------------------------------------------------------------
FROM base AS runner

ARG DATABASE_URL
ENV DATABASE_URL $DATABASE_URL
ENV NODE_ENV production
ENV PORT 3000

# Copy dependencies from deps stage
COPY --from=deps --chown=node:node /app/package.json ./package.json
COPY --from=deps --chown=node:node /app/package-lock.json ./package-lock.json
COPY --from=deps --chown=node:node /app/node_modules ./node_modules
# Automatically leverage output traces to reduce image size (https://s.id/1Gplb)
COPY --from=builder --chown=node:node /app/next.config.js ./next.config.js
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next ./.next

EXPOSE $PORT

CMD ["/usr/bin/npm", "run", "start"]
