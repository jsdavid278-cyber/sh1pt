# Supertokens With Postgresql

Authentication solution with PostgreSQL.

## Package

- Name: `@profullstack/sh1pt-service-supertokens-with-postgresql`
- Path: `services/supertokens-with-postgresql`
- Adapter ID: `service-supertokens-with-postgresql`
- Category: `auth`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-supertokens-with-postgresql
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-supertokens-with-postgresql typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/supertokens-with-postgresql/src/index.test.ts
```
