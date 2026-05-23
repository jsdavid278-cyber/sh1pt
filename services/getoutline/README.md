# Getoutline

Team knowledge base.

## Package

- Name: `@profullstack/sh1pt-service-getoutline`
- Path: `services/getoutline`
- Adapter ID: `service-getoutline`
- Category: `wiki`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-getoutline
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-getoutline typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/getoutline/src/index.test.ts
```
