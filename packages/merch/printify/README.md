# Printify (multi-provider POD)

sh1pt module for Printify (multi-provider POD).

## Package

- Name: `@profullstack/sh1pt-merch-printify`
- Path: `packages/merch/printify`
- Adapter ID: `merch-printify`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-merch-printify
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-merch-printify typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/merch/printify/src/index.test.ts
```
