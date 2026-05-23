# macOS (Mac App Store / notarized DMG)

sh1pt module for macOS (Mac App Store / notarized DMG).

## Package

- Name: `@profullstack/sh1pt-target-desktop-mac`
- Path: `packages/targets/desktop-mac`
- Adapter ID: `desktop-mac`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-desktop-mac
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-desktop-mac typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/desktop-mac/src/index.test.ts
```
