# Onetimesecret

Self-destructing secret sharing.

## Package

- Name: `@profullstack/sh1pt-service-onetimesecret`
- Path: `services/onetimesecret`
- Adapter ID: `service-onetimesecret`
- Category: `security`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-onetimesecret
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-onetimesecret typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/onetimesecret/src/index.test.ts
```
