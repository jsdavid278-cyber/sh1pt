# Superset With Postgresql

Data exploration and visualization.

## Package

- Name: `@profullstack/sh1pt-service-superset-with-postgresql`
- Path: `services/superset-with-postgresql`
- Adapter ID: `service-superset-with-postgresql`
- Category: `analytics`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-superset-with-postgresql
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-superset-with-postgresql typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/superset-with-postgresql/src/index.test.ts
```
