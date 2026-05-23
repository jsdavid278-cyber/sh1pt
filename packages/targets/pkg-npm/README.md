# npm

sh1pt module for npm.

## Package

- Name: `@profullstack/sh1pt-target-pkg-npm`
- Path: `packages/targets/pkg-npm`
- Adapter ID: `pkg-npm`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-npm
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-npm typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-npm/src/index.test.ts
```
