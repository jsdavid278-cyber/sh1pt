# App Store (Apple Vision Pro / visionOS)

sh1pt module for App Store (Apple Vision Pro / visionOS).

## Package

- Name: `@profullstack/sh1pt-target-xr-visionos`
- Path: `packages/targets/xr-visionos`
- Adapter ID: `xr-visionos`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-xr-visionos
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-xr-visionos typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/xr-visionos/src/index.test.ts
```
