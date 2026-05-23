# Pgbackweb

PostgreSQL backup web interface.

## Package

- Name: `@profullstack/sh1pt-service-pgbackweb`
- Path: `services/pgbackweb`
- Adapter ID: `service-pgbackweb`
- Category: `backup`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-pgbackweb
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-pgbackweb typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/pgbackweb/src/index.test.ts
```
