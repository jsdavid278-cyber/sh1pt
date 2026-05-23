# Spotify

sh1pt module for Spotify.

## Package

- Name: `@profullstack/sh1pt-social-spotify`
- Path: `packages/social/spotify`
- Adapter ID: `social-spotify`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-spotify
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-spotify typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/spotify/src/index.test.ts
```
