# Stacker News

sh1pt module for Stacker News.

## Package

- Name: `@profullstack/sh1pt-social-stackernews`
- Path: `packages/social/stackernews`
- Adapter ID: `social-stackernews`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-stackernews
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-stackernews typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/stackernews/src/index.test.ts
```
