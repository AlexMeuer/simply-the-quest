FROM oven/bun:1.1-alpine AS builder
WORKDIR /app

COPY bun.lock package.json ./

RUN bun install --production

COPY . .
RUN bun run build

FROM oven/bun:1.1-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json .

EXPOSE 3000

CMD ["bun", "run", "start"]
