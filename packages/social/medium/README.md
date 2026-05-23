# Medium

sh1pt module for Medium.

## Package

- Name: `@profullstack/sh1pt-social-medium`
- Path: `packages/social/medium`
- Adapter ID: `social-medium`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-medium
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-medium typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/medium/src/index.test.ts
```
