# WebXR (browser-native VR/AR)

sh1pt module for WebXR (browser-native VR/AR).

## Package

- Name: `@profullstack/sh1pt-target-xr-webxr`
- Path: `packages/targets/xr-webxr`
- Adapter ID: `xr-webxr`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-xr-webxr
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-xr-webxr typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/xr-webxr/src/index.test.ts
```
