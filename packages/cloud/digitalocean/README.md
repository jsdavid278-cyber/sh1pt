# DigitalOcean (VPS, GPU Droplets, Managed DB, Spaces)

sh1pt module for DigitalOcean (VPS, GPU Droplets, Managed DB, Spaces).

## Package

- Name: `@profullstack/sh1pt-cloud-digitalocean`
- Path: `packages/cloud/digitalocean`
- Adapter ID: `cloud-digitalocean`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-cloud-digitalocean
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-cloud-digitalocean typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/cloud/digitalocean/src/index.test.ts
```
