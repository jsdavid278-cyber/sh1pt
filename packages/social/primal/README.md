# Primal (Nostr)

sh1pt module for Primal (Nostr).

## Package

- Name: `@profullstack/sh1pt-social-primal`
- Path: `packages/social/primal`
- Adapter ID: `social-primal`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-primal
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-primal typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/primal/src/index.test.ts
```
