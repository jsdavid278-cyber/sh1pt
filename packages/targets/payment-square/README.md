# Square

sh1pt module for Square.

## Package

- Name: `@profullstack/sh1pt-target-payment-square`
- Path: `packages/targets/payment-square`
- Adapter ID: `payment-square`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-payment-square
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-payment-square typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/payment-square/src/index.test.ts
```
