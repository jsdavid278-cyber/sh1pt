# Amazon Appstore (Fire TV / Firestick)

sh1pt module for Amazon Appstore (Fire TV / Firestick).

## Package

- Name: `@profullstack/sh1pt-target-tv-firetv`
- Path: `packages/targets/tv-firetv`
- Adapter ID: `tv-firetv`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-tv-firetv
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-tv-firetv typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/tv-firetv/src/index.test.ts
```
