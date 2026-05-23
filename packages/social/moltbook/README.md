# Moltbook

sh1pt module for Moltbook.

## Package

- Name: `@profullstack/sh1pt-social-moltbook`
- Path: `packages/social/moltbook`
- Adapter ID: `social-moltbook`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-moltbook
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-moltbook typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/moltbook/src/index.test.ts
```
