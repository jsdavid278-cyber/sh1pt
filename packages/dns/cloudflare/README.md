# Cloudflare DNS

sh1pt module for Cloudflare DNS.

## Package

- Name: `@profullstack/sh1pt-dns-cloudflare`
- Path: `packages/dns/cloudflare`
- Adapter ID: `dns-cloudflare`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-dns-cloudflare
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-dns-cloudflare typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/dns/cloudflare/src/index.test.ts
```
