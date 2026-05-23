# Skimlinks

sh1pt module for Skimlinks.

## Package

- Name: `@profullstack/sh1pt-affiliate-skimlinks`
- Path: `packages/affiliates/skimlinks`
- Adapter ID: `affiliate-skimlinks`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-skimlinks
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-skimlinks typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/skimlinks/src/index.test.ts
```
