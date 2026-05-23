# Cloudflare (Workers / R2 / D1 / Queues)

sh1pt module for Cloudflare (Workers / R2 / D1 / Queues).

## Package

- Name: `@profullstack/sh1pt-cloud-cloudflare`
- Path: `packages/cloud/cloudflare`
- Adapter ID: `cloud-cloudflare`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-cloud-cloudflare
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-cloud-cloudflare typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/cloud/cloudflare/src/index.test.ts
```
