# Adyen

sh1pt module for Adyen.

## Package

- Name: `@profullstack/sh1pt-target-payment-adyen`
- Path: `packages/targets/payment-adyen`
- Adapter ID: `payment-adyen`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-payment-adyen
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-payment-adyen typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/payment-adyen/src/index.test.ts
```
