# Plex

Media organization and streaming.

## Package

- Name: `@profullstack/sh1pt-service-plex`
- Path: `services/plex`
- Adapter ID: `service-plex`
- Category: `media`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-plex
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-plex typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/plex/src/index.test.ts
```
