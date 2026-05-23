# The Colony

sh1pt module for The Colony.

## Package

- Name: `@profullstack/sh1pt-social-the-colony`
- Path: `packages/social/the-colony`
- Adapter ID: `social-the-colony`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-the-colony
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-the-colony typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/the-colony/src/index.test.ts
```
