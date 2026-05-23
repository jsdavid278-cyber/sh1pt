# Appflowy

Collaborative workspace with data control.

## Package

- Name: `@profullstack/sh1pt-service-appflowy`
- Path: `services/appflowy`
- Adapter ID: `service-appflowy`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-appflowy
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-appflowy typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/appflowy/src/index.test.ts
```
