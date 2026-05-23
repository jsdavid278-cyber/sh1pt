# Google Cloud DNS

sh1pt module for Google Cloud DNS.

## Package

- Name: `@profullstack/sh1pt-dns-googledns`
- Path: `packages/dns/googledns`
- Adapter ID: `dns-googledns`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-dns-googledns
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-dns-googledns typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/dns/googledns/src/index.test.ts
```
