# Linux (AppImage / Snap / Flatpak / deb / rpm)

sh1pt module for Linux (AppImage / Snap / Flatpak / deb / rpm).

## Package

- Name: `@profullstack/sh1pt-target-desktop-linux`
- Path: `packages/targets/desktop-linux`
- Adapter ID: `desktop-linux`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-desktop-linux
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-desktop-linux typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/desktop-linux/src/index.test.ts
```
