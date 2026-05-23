# Netlify

sh1pt module for Netlify.

## Package

- Name: `@profullstack/sh1pt-target-deploy-netlify`
- Path: `packages/targets/deploy-netlify`
- Adapter ID: `deploy-netlify`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-deploy-netlify
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-deploy-netlify typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/deploy-netlify/src/index.test.ts
```
