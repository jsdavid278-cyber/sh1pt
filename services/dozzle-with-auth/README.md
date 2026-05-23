# Dozzle With Auth

Docker logs UI with authentication.

## Package

- Name: `@profullstack/sh1pt-service-dozzle-with-auth`
- Path: `services/dozzle-with-auth`
- Adapter ID: `service-dozzle-with-auth`
- Category: `monitoring`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-dozzle-with-auth
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-dozzle-with-auth typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/dozzle-with-auth/src/index.test.ts
```
