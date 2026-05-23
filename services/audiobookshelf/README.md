# Audiobookshelf

Self-hosted audiobook and podcast server.

## Package

- Name: `@profullstack/sh1pt-service-audiobookshelf`
- Path: `services/audiobookshelf`
- Adapter ID: `service-audiobookshelf`
- Category: `media`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-audiobookshelf
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-audiobookshelf typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/audiobookshelf/src/index.test.ts
```
