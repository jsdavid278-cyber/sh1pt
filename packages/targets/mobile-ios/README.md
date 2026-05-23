# App Store (iOS)

sh1pt module for App Store (iOS).

## Package

- Name: `@profullstack/sh1pt-target-mobile-ios`
- Path: `packages/targets/mobile-ios`
- Adapter ID: `mobile-ios`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-mobile-ios
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-mobile-ios typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/mobile-ios/src/index.test.ts
```
