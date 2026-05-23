# Actualbudget

A local-first personal finance app.

## Package

- Name: `@profullstack/sh1pt-service-actualbudget`
- Path: `services/actualbudget`
- Adapter ID: `service-actualbudget`
- Category: `finance`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-actualbudget
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-actualbudget typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/actualbudget/src/index.test.ts
```
