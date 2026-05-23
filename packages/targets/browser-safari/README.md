# App Store (Safari ext.)

sh1pt module for App Store (Safari ext.).

## Package

- Name: `@profullstack/sh1pt-target-browser-safari`
- Path: `packages/targets/browser-safari`
- Adapter ID: `browser-safari`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-browser-safari
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-browser-safari typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/browser-safari/src/index.test.ts
```
