# Porkbun DNS

sh1pt module for Porkbun DNS.

## Package

- Name: `@profullstack/sh1pt-dns-porkbun`
- Path: `packages/dns/porkbun`
- Adapter ID: `dns-porkbun`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-dns-porkbun
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-dns-porkbun typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/dns/porkbun/src/index.test.ts
```
