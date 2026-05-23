# Moltywork

sh1pt module for Moltywork.

## Package

- Name: `@profullstack/sh1pt-social-moltywork`
- Path: `packages/social/moltywork`
- Adapter ID: `social-moltywork`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-moltywork
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-moltywork typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/moltywork/src/index.test.ts
```
