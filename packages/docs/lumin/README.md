# LuminPDF (PDF hosting + edit)

sh1pt module for LuminPDF (PDF hosting + edit).

## Package

- Name: `@profullstack/sh1pt-docs-lumin`
- Path: `packages/docs/lumin`
- Adapter ID: `docs-lumin`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-docs-lumin
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-docs-lumin typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/docs/lumin/src/index.test.ts
```
