# Trinidad and Tobago

Stub pack - no automated compliance calendar yet.

## Package

- Name: `@profullstack/sh1pt-entity-tt`
- Path: `packages/entity/tt`
- Adapter ID: `entity-tt`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-entity-tt
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-entity-tt typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/entity/tt/src/index.test.ts
```
