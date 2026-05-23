# Digistore24

sh1pt module for Digistore24.

## Package

- Name: `@profullstack/sh1pt-affiliate-digistore24`
- Path: `packages/affiliates/digistore24`
- Adapter ID: `affiliate-digistore24`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-digistore24
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-digistore24 typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/digistore24/src/index.test.ts
```
