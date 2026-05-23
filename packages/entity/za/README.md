# South Africa

Stub pack - no automated compliance calendar yet.

## Package

- Name: `@profullstack/sh1pt-entity-za`
- Path: `packages/entity/za`
- Adapter ID: `entity-za`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-entity-za
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-entity-za typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/entity/za/src/index.test.ts
```
