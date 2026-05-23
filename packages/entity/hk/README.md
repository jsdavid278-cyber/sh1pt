# Hong Kong

Due within 42 days of anniversary of incorporation.

## Package

- Name: `@profullstack/sh1pt-entity-hk`
- Path: `packages/entity/hk`
- Adapter ID: `entity-hk`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-entity-hk
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-entity-hk typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/entity/hk/src/index.test.ts
```
