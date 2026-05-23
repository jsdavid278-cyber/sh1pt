# DNSimple

sh1pt module for DNSimple.

## Package

- Name: `@profullstack/sh1pt-dns-dnsimple`
- Path: `packages/dns/dnsimple`
- Adapter ID: `dns-dnsimple`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-dns-dnsimple
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-dns-dnsimple typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/dns/dnsimple/src/index.test.ts
```
