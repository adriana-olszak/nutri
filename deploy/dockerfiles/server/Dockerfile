# ------- Stage 1: Dependencies -----
FROM node:20-bullseye-slim AS deps
WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest-9 --activate

# Copy only files needed for installation
COPY package.json pnpm-lock.yaml ./
COPY libs/server/db-client/prisma ./libs/server/db-client/prisma

# Install dependencies first (better layer caching)
RUN pnpm install

# -------- Stage 1: Builder --------
FROM node:20-bullseye-slim AS builder
WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest-9 --activate

# Copy node_modules and prisma files first
COPY --from=deps /app/node_modules ./node_modules

# Copy source files
COPY . .

# Generate Prisma client and build
RUN pnpm nx run server-db-client:generate-types --generator client && \
    pnpm nx run server:build --prod

# --------- Stage 2: Runner --------
FROM node:20-bullseye-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy necessary files (using the stage name "builder")
COPY --from=builder /app/dist/apps/server ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy Prisma files
COPY --from=builder /app/libs/server/db-client/prisma ./prisma

EXPOSE 3000

CMD ["node", "dist/main.js"]
