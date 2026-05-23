# Hetzner Cloud (VPS, Dedicated vCPU, Volumes, Load Balancers)

sh1pt module for Hetzner Cloud (VPS, Dedicated vCPU, Volumes, Load Balancers).

## Package

- Name: `@profullstack/sh1pt-cloud-hetzner`
- Path: `packages/cloud/hetzner`
- Adapter ID: `cloud-hetzner`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-cloud-hetzner
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-cloud-hetzner typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/cloud/hetzner/src/index.test.ts
```
