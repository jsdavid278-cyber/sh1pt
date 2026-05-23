# Coolify

sh1pt module for Coolify.

## Package

- Name: `@profullstack/sh1pt-target-deploy-coolify`
- Path: `packages/targets/deploy-coolify`
- Adapter ID: `deploy-coolify`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-deploy-coolify
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-deploy-coolify typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/deploy-coolify/src/index.test.ts
```
