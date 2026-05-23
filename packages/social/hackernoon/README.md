# HackerNoon

sh1pt module for HackerNoon.

## Package

- Name: `@profullstack/sh1pt-social-hackernoon`
- Path: `packages/social/hackernoon`
- Adapter ID: `social-hackernoon`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-hackernoon
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-hackernoon typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/hackernoon/src/index.test.ts
```
