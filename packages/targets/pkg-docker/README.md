# Container registries (Docker Hub / GHCR / Quay / ECR / GCR / ACR)

sh1pt module for Container registries (Docker Hub / GHCR / Quay / ECR / GCR / ACR).

## Package

- Name: `@profullstack/sh1pt-target-pkg-docker`
- Path: `packages/targets/pkg-docker`
- Adapter ID: `pkg-docker`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-docker
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-docker typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-docker/src/index.test.ts
```
