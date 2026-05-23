# Avangate (2Checkout / Verifone)

sh1pt module for Avangate (2Checkout / Verifone).

## Package

- Name: `@profullstack/sh1pt-affiliate-avangate`
- Path: `packages/affiliates/avangate`
- Adapter ID: `affiliate-avangate`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-avangate
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-avangate typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/avangate/src/index.test.ts
```
