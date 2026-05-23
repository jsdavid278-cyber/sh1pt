# Newapi

LLM gateway and asset management.

## Package

- Name: `@profullstack/sh1pt-service-newapi`
- Path: `services/newapi`
- Adapter ID: `service-newapi`
- Category: `ai`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-newapi
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-newapi typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/newapi/src/index.test.ts
```
