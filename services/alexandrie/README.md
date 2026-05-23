# Alexandrie

Markdown workspace for creative work.

## Package

- Name: `@profullstack/sh1pt-service-alexandrie`
- Path: `services/alexandrie`
- Adapter ID: `service-alexandrie`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-alexandrie
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-alexandrie typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/alexandrie/src/index.test.ts
```
