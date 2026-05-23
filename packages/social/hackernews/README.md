# Hacker News

sh1pt module for Hacker News.

## Package

- Name: `@profullstack/sh1pt-social-hackernews`
- Path: `packages/social/hackernews`
- Adapter ID: `social-hackernews`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-hackernews
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-hackernews typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/hackernews/src/index.test.ts
```
