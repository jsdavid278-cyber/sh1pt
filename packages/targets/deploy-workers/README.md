# Cloudflare Workers

sh1pt module for Cloudflare Workers.

## Package

- Name: `@profullstack/sh1pt-target-deploy-workers`
- Path: `packages/targets/deploy-workers`
- Adapter ID: `deploy-workers`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-deploy-workers
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-deploy-workers typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/deploy-workers/src/index.test.ts
```
