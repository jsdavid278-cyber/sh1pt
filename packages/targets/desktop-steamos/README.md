# SteamOS / Steam Deck (Desktop Mode / Flatpak)

sh1pt module for SteamOS / Steam Deck (Desktop Mode / Flatpak).

## Package

- Name: `@profullstack/sh1pt-target-desktop-steamos`
- Path: `packages/targets/desktop-steamos`
- Adapter ID: `desktop-steamos`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-desktop-steamos
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-desktop-steamos typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/desktop-steamos/src/index.test.ts
```
