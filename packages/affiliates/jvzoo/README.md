# JVZoo

sh1pt module for JVZoo.

## Package

- Name: `@profullstack/sh1pt-affiliate-jvzoo`
- Path: `packages/affiliates/jvzoo`
- Adapter ID: `affiliate-jvzoo`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-jvzoo
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-jvzoo typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/jvzoo/src/index.test.ts
```
