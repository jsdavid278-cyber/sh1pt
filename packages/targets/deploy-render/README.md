# Render

sh1pt module for Render.

## Package

- Name: `@profullstack/sh1pt-target-deploy-render`
- Path: `packages/targets/deploy-render`
- Adapter ID: `deploy-render`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-deploy-render
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-deploy-render typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/deploy-render/src/index.test.ts
```
