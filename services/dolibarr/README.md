# Dolibarr

Organization activity management suite.

## Package

- Name: `@profullstack/sh1pt-service-dolibarr`
- Path: `services/dolibarr`
- Adapter ID: `service-dolibarr`
- Category: `crm`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-dolibarr
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-dolibarr typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/dolibarr/src/index.test.ts
```
