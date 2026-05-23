# LG Content Store (webOS)

sh1pt module for LG Content Store (webOS).

## Package

- Name: `@profullstack/sh1pt-target-tv-webos`
- Path: `packages/targets/tv-webos`
- Adapter ID: `tv-webos`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-tv-webos
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-tv-webos typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/tv-webos/src/index.test.ts
```
