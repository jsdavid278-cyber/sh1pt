# Microsoft winget

sh1pt module for Microsoft winget.

## Package

- Name: `@profullstack/sh1pt-target-pkg-winget`
- Path: `packages/targets/pkg-winget`
- Adapter ID: `pkg-winget`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-winget
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-winget typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-winget/src/index.test.ts
```
