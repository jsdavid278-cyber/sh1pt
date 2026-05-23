# Memos

Lightweight note-taking solution.

## Package

- Name: `@profullstack/sh1pt-service-memos`
- Path: `services/memos`
- Adapter ID: `service-memos`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-memos
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-memos typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/memos/src/index.test.ts
```
