# Libretranslate

Self-hosted machine translation API.

## Package

- Name: `@profullstack/sh1pt-service-libretranslate`
- Path: `services/libretranslate`
- Adapter ID: `service-libretranslate`
- Category: `localization`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-libretranslate
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-libretranslate typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/libretranslate/src/index.test.ts
```
