# Chrome Web Store

sh1pt module for Chrome Web Store.

## Package

- Name: `@profullstack/sh1pt-target-browser-chrome`
- Path: `packages/targets/browser-chrome`
- Adapter ID: `browser-chrome`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-browser-chrome
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-browser-chrome typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/browser-chrome/src/index.test.ts
```
