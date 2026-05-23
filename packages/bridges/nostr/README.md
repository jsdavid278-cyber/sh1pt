# Nostr

sh1pt module for Nostr.

## Package

- Name: `@profullstack/sh1pt-bridge-nostr`
- Path: `packages/bridges/nostr`
- Adapter ID: `bridge-nostr`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bridge-nostr
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bridge-nostr typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bridges/nostr/src/index.test.ts
```
