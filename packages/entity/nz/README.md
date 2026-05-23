# New Zealand

Filed in the month of the anniversary of incorporation.

## Package

- Name: `@profullstack/sh1pt-entity-nz`
- Path: `packages/entity/nz`
- Adapter ID: `entity-nz`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-entity-nz
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-entity-nz typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/entity/nz/src/index.test.ts
```
