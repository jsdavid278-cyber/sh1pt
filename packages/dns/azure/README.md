# Azure DNS

sh1pt module for Azure DNS.

## Package

- Name: `@profullstack/sh1pt-dns-azure`
- Path: `packages/dns/azure`
- Adapter ID: `dns-azure`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-dns-azure
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-dns-azure typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/dns/azure/src/index.test.ts
```
