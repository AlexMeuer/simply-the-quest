# simply-the-quest

## Prerequisites
- Docker
- Node.js
- pnpm

## Start Development Steps
1. Copy the example environment file: `cp .env.example .env`
2. Bring the app up: `pnpm dev:up`

## Ports Map
- Neo4j: 7474
- MinIO: 9001
- Meili: 7700

## Troubleshooting
- Ensure all services are up and check logs for any errors.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.19. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
