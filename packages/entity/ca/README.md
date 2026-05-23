# Canada

Filed within 60 days of anniversary of incorporation (federal CBCA).

## Package

- Name: `@profullstack/sh1pt-entity-ca`
- Path: `packages/entity/ca`
- Adapter ID: `entity-ca`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-entity-ca
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-entity-ca typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/entity/ca/src/index.test.ts
```
