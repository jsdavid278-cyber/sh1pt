# Tanzania

Stub pack - no automated compliance calendar yet.

## Package

- Name: `@profullstack/sh1pt-entity-tz`
- Path: `packages/entity/tz`
- Adapter ID: `entity-tz`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-entity-tz
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-entity-tz typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/entity/tz/src/index.test.ts
```
