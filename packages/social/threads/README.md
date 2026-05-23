# Threads

sh1pt module for Threads.

## Package

- Name: `@profullstack/sh1pt-social-threads`
- Path: `packages/social/threads`
- Adapter ID: `social-threads`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-threads
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-threads typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/threads/src/index.test.ts
```
