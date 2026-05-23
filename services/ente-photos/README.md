# Ente Photos

End-to-end encrypted photo alternative.

## Package

- Name: `@profullstack/sh1pt-service-ente-photos`
- Path: `services/ente-photos`
- Adapter ID: `service-ente-photos`
- Category: `media`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-ente-photos
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-ente-photos typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/ente-photos/src/index.test.ts
```
