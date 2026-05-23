# AWS Lambda

sh1pt module for AWS Lambda.

## Package

- Name: `@profullstack/sh1pt-target-deploy-lambda`
- Path: `packages/targets/deploy-lambda`
- Adapter ID: `deploy-lambda`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-deploy-lambda
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-deploy-lambda typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/deploy-lambda/src/index.test.ts
```
