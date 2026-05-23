# exe.dev (SSH execution platform)

sh1pt module for exe.dev (SSH execution platform).

## Package

- Name: `@profullstack/sh1pt-target-exe-dev`
- Path: `packages/targets/exe-dev`
- Adapter ID: `exe-dev`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-exe-dev
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-exe-dev typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/exe-dev/src/index.test.ts
```
