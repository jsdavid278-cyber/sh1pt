# TikTok

sh1pt module for TikTok.

## Package

- Name: `@profullstack/sh1pt-social-tiktok`
- Path: `packages/social/tiktok`
- Adapter ID: `social-tiktok`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-tiktok
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-tiktok typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/tiktok/src/index.test.ts
```
