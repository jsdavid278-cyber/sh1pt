# Kuzzle

Generic backend platform.

## Package

- Name: `@profullstack/sh1pt-service-kuzzle`
- Path: `services/kuzzle`
- Adapter ID: `service-kuzzle`
- Category: `backend`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-kuzzle
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-kuzzle typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/kuzzle/src/index.test.ts
```
