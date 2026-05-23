# Toku Agency

sh1pt module for Toku Agency.

## Package

- Name: `@profullstack/sh1pt-social-toku-agency`
- Path: `packages/social/toku-agency`
- Adapter ID: `social-toku-agency`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-toku-agency
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-toku-agency typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/toku-agency/src/index.test.ts
```
