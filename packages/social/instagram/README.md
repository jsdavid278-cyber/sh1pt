# Instagram

sh1pt module for Instagram.

## Package

- Name: `@profullstack/sh1pt-social-instagram`
- Path: `packages/social/instagram`
- Adapter ID: `social-instagram`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-instagram
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-instagram typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/instagram/src/index.test.ts
```
