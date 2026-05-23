# Trailbase

Rust/SQLite app server.

## Package

- Name: `@profullstack/sh1pt-service-trailbase`
- Path: `services/trailbase`
- Adapter ID: `service-trailbase`
- Category: `backend`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-trailbase
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-trailbase typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/trailbase/src/index.test.ts
```
