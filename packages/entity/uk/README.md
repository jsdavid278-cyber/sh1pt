# United Kingdom

Annual - due within 14 days of the anniversary of incorporation.

## Package

- Name: `@profullstack/sh1pt-entity-uk`
- Path: `packages/entity/uk`
- Adapter ID: `entity-uk`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-entity-uk
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-entity-uk typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/entity/uk/src/index.test.ts
```
