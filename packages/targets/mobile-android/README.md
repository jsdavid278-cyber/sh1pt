# Google Play Store

sh1pt module for Google Play Store.

## Package

- Name: `@profullstack/sh1pt-target-mobile-android`
- Path: `packages/targets/mobile-android`
- Adapter ID: `mobile-android`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-mobile-android
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-mobile-android typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/mobile-android/src/index.test.ts
```
