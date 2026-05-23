# WebSub

sh1pt module for WebSub.

## Package

- Name: `@profullstack/sh1pt-w3c-websub`
- Path: `packages/w3c/websub`
- Adapter ID: `w3c-websub`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-w3c-websub
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-w3c-websub typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/w3c/websub/src/index.test.ts
```
