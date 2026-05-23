# Deno Deploy

sh1pt module for Deno Deploy.

## Package

- Name: `@profullstack/sh1pt-target-deploy-denodeploy`
- Path: `packages/targets/deploy-denodeploy`
- Adapter ID: `${project}@${version}`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-deploy-denodeploy
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-deploy-denodeploy typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/deploy-denodeploy/src/index.test.ts
```
