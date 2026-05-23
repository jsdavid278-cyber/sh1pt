# Blossom Social (Nostr)

sh1pt module for Blossom Social (Nostr).

## Package

- Name: `@profullstack/sh1pt-social-blossom`
- Path: `packages/social/blossom`
- Adapter ID: `social-blossom`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-blossom
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-blossom typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/blossom/src/index.test.ts
```
