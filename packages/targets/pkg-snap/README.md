# Snapcraft

sh1pt module for Snapcraft.

## Package

- Name: `@profullstack/sh1pt-target-pkg-snap`
- Path: `packages/targets/pkg-snap`
- Adapter ID: `pkg-snap`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-snap
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-snap typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-snap/src/index.test.ts
```
