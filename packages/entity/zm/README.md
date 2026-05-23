# Zambia

Stub pack - no automated compliance calendar yet.

## Package

- Name: `@profullstack/sh1pt-entity-zm`
- Path: `packages/entity/zm`
- Adapter ID: `entity-zm`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-entity-zm
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-entity-zm typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/entity/zm/src/index.test.ts
```
