# Moltfounders

sh1pt module for Moltfounders.

## Package

- Name: `@profullstack/sh1pt-social-moltfounders`
- Path: `packages/social/moltfounders`
- Adapter ID: `social-moltfounders`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-moltfounders
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-moltfounders typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/moltfounders/src/index.test.ts
```
