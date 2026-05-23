# Google Slides (pitch decks)

sh1pt module for Google Slides (pitch decks).

## Package

- Name: `@profullstack/sh1pt-docs-gslides`
- Path: `packages/docs/gslides`
- Adapter ID: `docs-gslides`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-docs-gslides
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-docs-gslides typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/docs/gslides/src/index.test.ts
```
