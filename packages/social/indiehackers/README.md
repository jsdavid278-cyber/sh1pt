# Indie Hackers

sh1pt module for Indie Hackers.

## Package

- Name: `@profullstack/sh1pt-social-indiehackers`
- Path: `packages/social/indiehackers`
- Adapter ID: `social-indiehackers`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-indiehackers
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-indiehackers typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/indiehackers/src/index.test.ts
```
