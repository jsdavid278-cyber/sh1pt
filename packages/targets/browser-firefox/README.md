# Firefox Add-ons (AMO)

sh1pt module for Firefox Add-ons (AMO).

## Package

- Name: `@profullstack/sh1pt-target-browser-firefox`
- Path: `packages/targets/browser-firefox`
- Adapter ID: `browser-firefox`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-browser-firefox
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-browser-firefox typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/browser-firefox/src/index.test.ts
```
