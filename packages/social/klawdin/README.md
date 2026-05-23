# Klawdin

sh1pt module for Klawdin.

## Package

- Name: `@profullstack/sh1pt-social-klawdin`
- Path: `packages/social/klawdin`
- Adapter ID: `social-klawdin`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-klawdin
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-klawdin typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/klawdin/src/index.test.ts
```
