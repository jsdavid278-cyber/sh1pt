# Roku Channel Store

sh1pt module for Roku Channel Store.

## Package

- Name: `@profullstack/sh1pt-target-tv-roku`
- Path: `packages/targets/tv-roku`
- Adapter ID: `tv-roku`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-tv-roku
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-tv-roku typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/tv-roku/src/index.test.ts
```
