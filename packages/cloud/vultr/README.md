# Vultr (VPS, Bare Metal, GPU, Block Storage, Managed DB)

sh1pt module for Vultr (VPS, Bare Metal, GPU, Block Storage, Managed DB).

## Package

- Name: `@profullstack/sh1pt-cloud-vultr`
- Path: `packages/cloud/vultr`
- Adapter ID: `cloud-vultr`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-cloud-vultr
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-cloud-vultr typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/cloud/vultr/src/index.test.ts
```
