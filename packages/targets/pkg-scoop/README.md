# Scoop bucket

sh1pt module for Scoop bucket.

## Package

- Name: `@profullstack/sh1pt-target-pkg-scoop`
- Path: `packages/targets/pkg-scoop`
- Adapter ID: `pkg-scoop`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-scoop
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-scoop typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-scoop/src/index.test.ts
```
