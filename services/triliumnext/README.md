# Triliumnext

Personal knowledge base.

## Package

- Name: `@profullstack/sh1pt-service-triliumnext`
- Path: `services/triliumnext`
- Adapter ID: `service-triliumnext`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-triliumnext
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-triliumnext typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/triliumnext/src/index.test.ts
```
