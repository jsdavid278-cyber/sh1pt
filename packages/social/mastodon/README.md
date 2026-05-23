# Mastodon (Fediverse)

sh1pt module for Mastodon (Fediverse).

## Package

- Name: `@profullstack/sh1pt-social-mastodon`
- Path: `packages/social/mastodon`
- Adapter ID: `social-mastodon`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-mastodon
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-mastodon typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/mastodon/src/index.test.ts
```
