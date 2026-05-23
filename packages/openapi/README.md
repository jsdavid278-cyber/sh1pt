# Openapi

OpenAPI loader/IR + generators for SDKs, MCP servers, and docs sites.

## Package

- Name: `@profullstack/sh1pt-openapi`
- Path: `packages/openapi`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-openapi
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-openapi typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/openapi/src/index.test.ts
```
