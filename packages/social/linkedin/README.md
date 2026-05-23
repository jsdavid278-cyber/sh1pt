# LinkedIn

sh1pt module for LinkedIn.

## Package

- Name: `@profullstack/sh1pt-social-linkedin`
- Path: `packages/social/linkedin`
- Adapter ID: `social-linkedin`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-linkedin
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-linkedin typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/linkedin/src/index.test.ts
```
