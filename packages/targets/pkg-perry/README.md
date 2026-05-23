# Perry (TS -> native compile + publish)

sh1pt module for Perry (TS -> native compile + publish).

## Package

- Name: `@profullstack/sh1pt-target-pkg-perry`
- Path: `packages/targets/pkg-perry`
- Adapter ID: `pkg-perry`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-perry
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-perry typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-perry/src/index.test.ts
```
