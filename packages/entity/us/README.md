# United States

Due March 1 each year for corporations.

## Package

- Name: `@profullstack/sh1pt-entity-us`
- Path: `packages/entity/us`
- Adapter ID: `entity-us`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-entity-us
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-entity-us typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/entity/us/src/index.test.ts
```
