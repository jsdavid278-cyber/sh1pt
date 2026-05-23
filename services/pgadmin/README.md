# Pgadmin

PostgreSQL database management.

## Package

- Name: `@profullstack/sh1pt-service-pgadmin`
- Path: `services/pgadmin`
- Adapter ID: `service-pgadmin`
- Category: `db`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-pgadmin
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-pgadmin typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/pgadmin/src/index.test.ts
```
