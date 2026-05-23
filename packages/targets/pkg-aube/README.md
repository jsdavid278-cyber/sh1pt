# Aube

sh1pt module for Aube.

## Package

- Name: `@profullstack/sh1pt-target-pkg-aube`
- Path: `packages/targets/pkg-aube`
- Adapter ID: `pkg-aube`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-aube
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-aube typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-aube/src/index.test.ts
```
