# Bluesky (AT Protocol)

sh1pt module for Bluesky (AT Protocol).

## Package

- Name: `@profullstack/sh1pt-social-bluesky`
- Path: `packages/social/bluesky`
- Adapter ID: `social-bluesky`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-bluesky
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-bluesky typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/bluesky/src/index.test.ts
```
