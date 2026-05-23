# Pico Store

sh1pt module for Pico Store.

## Package

- Name: `@profullstack/sh1pt-target-xr-pico`
- Path: `packages/targets/xr-pico`
- Adapter ID: `xr-pico`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-xr-pico
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-xr-pico typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/xr-pico/src/index.test.ts
```
