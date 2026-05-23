# Expo / EAS

sh1pt module for Expo / EAS.

## Package

- Name: `@profullstack/sh1pt-target-mobile-expo`
- Path: `packages/targets/mobile-expo`
- Adapter ID: `mobile-expo`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-mobile-expo
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-mobile-expo typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/mobile-expo/src/index.test.ts
```
