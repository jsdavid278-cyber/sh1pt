# Directus With Postgresql

API and CMS with PostgreSQL.

## Package

- Name: `@profullstack/sh1pt-service-directus-with-postgresql`
- Path: `services/directus-with-postgresql`
- Adapter ID: `service-directus-with-postgresql`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-directus-with-postgresql
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-directus-with-postgresql typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/directus-with-postgresql/src/index.test.ts
```
