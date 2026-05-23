# Play Store (Android TV)

sh1pt module for Play Store (Android TV).

## Package

- Name: `@profullstack/sh1pt-target-tv-androidtv`
- Path: `packages/targets/tv-androidtv`
- Adapter ID: `tv-androidtv`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-tv-androidtv
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-tv-androidtv typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/tv-androidtv/src/index.test.ts
```
