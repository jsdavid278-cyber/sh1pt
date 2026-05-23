# RunPod (GPU)

sh1pt module for RunPod (GPU).

## Package

- Name: `@profullstack/sh1pt-cloud-runpod`
- Path: `packages/cloud/runpod`
- Adapter ID: `cloud-runpod`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-cloud-runpod
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-cloud-runpod typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/cloud/runpod/src/index.test.ts
```
