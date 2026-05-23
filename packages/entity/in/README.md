# India

Stub pack - no automated compliance calendar yet.

## Package

- Name: `@profullstack/sh1pt-entity-in`
- Path: `packages/entity/in`
- Adapter ID: `entity-in`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-entity-in
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-entity-in typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/entity/in/src/index.test.ts
```
