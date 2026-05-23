# Calibre Web

eBook library interface.

## Package

- Name: `@profullstack/sh1pt-service-calibre-web`
- Path: `services/calibre-web`
- Adapter ID: `service-calibre-web`
- Category: `media`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-calibre-web
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-calibre-web typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/calibre-web/src/index.test.ts
```
