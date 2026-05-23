# Drizzle Gateway

Drizzle Studio alternative.

## Package

- Name: `@profullstack/sh1pt-service-drizzle-gateway`
- Path: `services/drizzle-gateway`
- Adapter ID: `service-drizzle-gateway`
- Category: `db`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-drizzle-gateway
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-drizzle-gateway typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/drizzle-gateway/src/index.test.ts
```
