# Tumblr

sh1pt module for Tumblr.

## Package

- Name: `@profullstack/sh1pt-social-tumblr`
- Path: `packages/social/tumblr`
- Adapter ID: `social-tumblr`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-tumblr
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-tumblr typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/tumblr/src/index.test.ts
```
