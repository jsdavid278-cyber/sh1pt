# Codimd

Collaborative markdown notes.

## Package

- Name: `@profullstack/sh1pt-service-codimd`
- Path: `services/codimd`
- Adapter ID: `service-codimd`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-codimd
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-codimd typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/codimd/src/index.test.ts
```
