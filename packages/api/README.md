# API

sh1pt module for API.

## Package

- Name: `@profullstack/sh1pt-api`
- Path: `packages/api`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `dev`: `tsx watch src/server.ts`
- `prepublishOnly`: `pnpm build`
- `start`: `node dist/server.js`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-api
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-api typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/api/src/index.test.ts
```
