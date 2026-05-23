# DigitalOcean DNS

sh1pt module for DigitalOcean DNS.

## Package

- Name: `@profullstack/sh1pt-dns-digitalocean`
- Path: `packages/dns/digitalocean`
- Adapter ID: `dns-digitalocean`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-dns-digitalocean
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-dns-digitalocean typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/dns/digitalocean/src/index.test.ts
```
