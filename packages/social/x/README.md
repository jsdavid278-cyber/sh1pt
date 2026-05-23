# X (Twitter)

session token.

## Package

- Name: `@profullstack/sh1pt-social-x`
- Path: `packages/social/x`
- Adapter ID: `social-x`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-x
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-x typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/x/src/index.test.ts
```
