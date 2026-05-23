# Microsoft Advertising (Bing)

sh1pt module for Microsoft Advertising (Bing).

## Package

- Name: `@profullstack/sh1pt-promo-microsoft`
- Path: `packages/promo/microsoft`
- Adapter ID: `promo-microsoft`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-promo-microsoft
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-promo-microsoft typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/promo/microsoft/src/index.test.ts
```
