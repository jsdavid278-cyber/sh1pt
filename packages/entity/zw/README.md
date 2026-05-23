# Zimbabwe

Stub pack - no automated compliance calendar yet.

## Package

- Name: `@profullstack/sh1pt-entity-zw`
- Path: `packages/entity/zw`
- Adapter ID: `entity-zw`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-entity-zw
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-entity-zw typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/entity/zw/src/index.test.ts
```
