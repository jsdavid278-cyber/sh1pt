# Mastodon

sh1pt module for Mastodon.

## Package

- Name: `@profullstack/sh1pt-bridge-mastodon`
- Path: `packages/bridges/mastodon`
- Adapter ID: `bridge-mastodon`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bridge-mastodon
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bridge-mastodon typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bridges/mastodon/src/index.test.ts
```
