# Tikclawk

sh1pt module for Tikclawk.

## Package

- Name: `@profullstack/sh1pt-social-tikclawk`
- Path: `packages/social/tikclawk`
- Adapter ID: `social-tikclawk`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-tikclawk
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-tikclawk typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/tikclawk/src/index.test.ts
```
