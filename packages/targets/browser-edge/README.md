# Microsoft Edge Add-ons

sh1pt module for Microsoft Edge Add-ons.

## Package

- Name: `@profullstack/sh1pt-target-browser-edge`
- Path: `packages/targets/browser-edge`
- Adapter ID: `browser-edge`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-browser-edge
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-browser-edge typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/browser-edge/src/index.test.ts
```
