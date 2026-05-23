# Homebrew

sh1pt module for Homebrew.

## Package

- Name: `@profullstack/sh1pt-target-pkg-homebrew`
- Path: `packages/targets/pkg-homebrew`
- Adapter ID: `pkg-homebrew`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-homebrew
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-homebrew typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-homebrew/src/index.test.ts
```
