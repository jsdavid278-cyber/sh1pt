# Homebox

Inventory and organization system.

## Package

- Name: `@profullstack/sh1pt-service-homebox`
- Path: `services/homebox`
- Adapter ID: `service-homebox`
- Category: `tracking`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-homebox
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-homebox typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/homebox/src/index.test.ts
```
