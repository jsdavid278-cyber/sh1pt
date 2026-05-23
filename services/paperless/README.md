# Paperless

Document management system.

## Package

- Name: `@profullstack/sh1pt-service-paperless`
- Path: `services/paperless`
- Adapter ID: `service-paperless`
- Category: `docs`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-paperless
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-paperless typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/paperless/src/index.test.ts
```
