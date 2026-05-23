# PyPI

sh1pt module for PyPI.

## Package

- Name: `@profullstack/sh1pt-target-sdk-pypi`
- Path: `packages/targets/sdk-pypi`
- Adapter ID: `sdk-pypi`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-sdk-pypi
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-sdk-pypi typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/sdk-pypi/src/index.test.ts
```
