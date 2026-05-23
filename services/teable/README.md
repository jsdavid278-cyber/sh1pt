# Teable

Visual interface for PostgreSQL.

## Package

- Name: `@profullstack/sh1pt-service-teable`
- Path: `services/teable`
- Adapter ID: `service-teable`
- Category: `db`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-teable
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-teable typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/teable/src/index.test.ts
```
