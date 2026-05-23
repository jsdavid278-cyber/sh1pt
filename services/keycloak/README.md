# Keycloak

Identity and access management.

## Package

- Name: `@profullstack/sh1pt-service-keycloak`
- Path: `services/keycloak`
- Adapter ID: `service-keycloak`
- Category: `auth`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-keycloak
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-keycloak typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/keycloak/src/index.test.ts
```
