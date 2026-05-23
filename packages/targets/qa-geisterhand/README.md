# Geisterhand (UI test/automation harness)

sh1pt module for Geisterhand (UI test/automation harness).

## Package

- Name: `@profullstack/sh1pt-target-qa-geisterhand`
- Path: `packages/targets/qa-geisterhand`
- Adapter ID: `qa-geisterhand`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-qa-geisterhand
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-qa-geisterhand typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/qa-geisterhand/src/index.test.ts
```
