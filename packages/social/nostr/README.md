# Nostr

sh1pt module for Nostr.

## Package

- Name: `@profullstack/sh1pt-social-nostr`
- Path: `packages/social/nostr`
- Adapter ID: `social-nostr`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-nostr
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-nostr typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/nostr/src/index.test.ts
```
