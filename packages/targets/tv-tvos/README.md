# App Store (Apple TV / tvOS)

sh1pt module for App Store (Apple TV / tvOS).

## Package

- Name: `@profullstack/sh1pt-target-tv-tvos`
- Path: `packages/targets/tv-tvos`
- Adapter ID: `tv-tvos`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-tv-tvos
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-tv-tvos typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/tv-tvos/src/index.test.ts
```
