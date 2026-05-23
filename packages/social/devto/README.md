# DEV Community (dev.to)

sh1pt module for DEV Community (dev.to).

## Package

- Name: `@profullstack/sh1pt-social-devto`
- Path: `packages/social/devto`
- Adapter ID: `social-devto`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-devto
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-devto typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/devto/src/index.test.ts
```
