# Redis Insight

Redis GUI client.

## Package

- Name: `@profullstack/sh1pt-service-redis-insight`
- Path: `services/redis-insight`
- Adapter ID: `service-redis-insight`
- Category: `db`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-redis-insight
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-redis-insight typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/redis-insight/src/index.test.ts
```
