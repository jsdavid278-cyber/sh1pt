# Fly.io Machines / Postgres / Volumes

sh1pt module for Fly.io Machines / Postgres / Volumes.

## Package

- Name: `@profullstack/sh1pt-cloud-fly`
- Path: `packages/cloud/fly`
- Adapter ID: `cloud-fly`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-cloud-fly
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-cloud-fly typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/cloud/fly/src/index.test.ts
```
