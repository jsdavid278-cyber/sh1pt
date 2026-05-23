# Flathub

sh1pt module for Flathub.

## Package

- Name: `@profullstack/sh1pt-target-pkg-flatpak`
- Path: `packages/targets/pkg-flatpak`
- Adapter ID: `pkg-flatpak`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-flatpak
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-flatpak typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-flatpak/src/index.test.ts
```
