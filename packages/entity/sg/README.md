# Singapore

Filed within 7 months of FYE for non-listed companies.

## Package

- Name: `@profullstack/sh1pt-entity-sg`
- Path: `packages/entity/sg`
- Adapter ID: `entity-sg`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-entity-sg
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-entity-sg typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/entity/sg/src/index.test.ts
```
