# Marp (markdown -> pptx/pdf/html, open-source)

sh1pt module for Marp (markdown -> pptx/pdf/html, open-source).

## Package

- Name: `@profullstack/sh1pt-docs-marp`
- Path: `packages/docs/marp`
- Adapter ID: `docs-marp`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-docs-marp
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-docs-marp typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/docs/marp/src/index.test.ts
```
