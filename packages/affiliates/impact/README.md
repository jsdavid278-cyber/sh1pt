# Impact (impact.com)

sh1pt module for Impact (impact.com).

## Package

- Name: `@profullstack/sh1pt-affiliate-impact`
- Path: `packages/affiliates/impact`
- Adapter ID: `affiliate-impact`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-impact
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-impact typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/impact/src/index.test.ts
```
