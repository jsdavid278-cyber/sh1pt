# Privatebin

Minimalist pastebin service.

## Package

- Name: `@profullstack/sh1pt-service-privatebin`
- Path: `services/privatebin`
- Adapter ID: `service-privatebin`
- Category: `tools`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-privatebin
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-privatebin typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/privatebin/src/index.test.ts
```
