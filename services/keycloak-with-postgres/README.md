# Keycloak With Postgres

IAM with PostgreSQL.

## Package

- Name: `@profullstack/sh1pt-service-keycloak-with-postgres`
- Path: `services/keycloak-with-postgres`
- Adapter ID: `service-keycloak-with-postgres`
- Category: `auth`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-keycloak-with-postgres
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-keycloak-with-postgres typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/keycloak-with-postgres/src/index.test.ts
```
