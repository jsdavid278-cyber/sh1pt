# Hashnode

sh1pt module for Hashnode.

## Package

- Name: `@profullstack/sh1pt-social-hashnode`
- Path: `packages/social/hashnode`
- Adapter ID: `social-hashnode`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-hashnode
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-hashnode typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/hashnode/src/index.test.ts
```
