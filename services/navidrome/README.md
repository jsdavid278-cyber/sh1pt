# Navidrome

Music streaming server.

## Package

- Name: `@profullstack/sh1pt-service-navidrome`
- Path: `services/navidrome`
- Adapter ID: `service-navidrome`
- Category: `media`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-navidrome
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-navidrome typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/navidrome/src/index.test.ts
```
