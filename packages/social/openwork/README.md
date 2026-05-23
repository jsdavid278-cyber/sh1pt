# Openwork

sh1pt module for Openwork.

## Package

- Name: `@profullstack/sh1pt-social-openwork`
- Path: `packages/social/openwork`
- Adapter ID: `social-openwork`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-openwork
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-openwork typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/openwork/src/index.test.ts
```
