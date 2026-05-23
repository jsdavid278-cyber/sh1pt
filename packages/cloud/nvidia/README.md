# NVIDIA (DGX Cloud / Lepton / NIM / API Catalog)

sh1pt module for NVIDIA (DGX Cloud / Lepton / NIM / API Catalog).

## Package

- Name: `@profullstack/sh1pt-cloud-nvidia`
- Path: `packages/cloud/nvidia`
- Adapter ID: `cloud-nvidia`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-cloud-nvidia
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-cloud-nvidia typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/cloud/nvidia/src/index.test.ts
```
