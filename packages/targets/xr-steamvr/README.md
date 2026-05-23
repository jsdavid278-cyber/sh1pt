# Steam (PCVR / SteamVR / OpenXR)

sh1pt module for Steam (PCVR / SteamVR / OpenXR).

## Package

- Name: `@profullstack/sh1pt-target-xr-steamvr`
- Path: `packages/targets/xr-steamvr`
- Adapter ID: `xr-steamvr`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-xr-steamvr
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-xr-steamvr typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/xr-steamvr/src/index.test.ts
```
