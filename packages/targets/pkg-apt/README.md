# apt repo / PPA

sh1pt module for apt repo / PPA.

## Package

- Name: `@profullstack/sh1pt-target-pkg-apt`
- Path: `packages/targets/pkg-apt`
- Adapter ID: `pkg-apt`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-apt
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-apt typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-apt/src/index.test.ts
```
