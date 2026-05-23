# Tradedoubler

sh1pt module for Tradedoubler.

## Package

- Name: `@profullstack/sh1pt-affiliate-tradedoubler`
- Path: `packages/affiliates/tradedoubler`
- Adapter ID: `affiliate-tradedoubler`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-tradedoubler
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-tradedoubler typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/tradedoubler/src/index.test.ts
```
