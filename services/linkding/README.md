# Linkding

Minimal self-hosted bookmark manager.

## Package

- Name: `@profullstack/sh1pt-service-linkding`
- Path: `services/linkding`
- Adapter ID: `service-linkding`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-linkding
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-linkding typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/linkding/src/index.test.ts
```
