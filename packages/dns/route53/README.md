# AWS Route 53

sh1pt module for AWS Route 53.

## Package

- Name: `@profullstack/sh1pt-dns-route53`
- Path: `packages/dns/route53`
- Adapter ID: `dns-route53`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-dns-route53
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-dns-route53 typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/dns/route53/src/index.test.ts
```
