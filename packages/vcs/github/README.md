# GitHub

sh1pt module for GitHub.

## Package

- Name: `@profullstack/sh1pt-vcs-github`
- Path: `packages/vcs/github`
- Adapter ID: `vcs-github`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-vcs-github
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-vcs-github typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/vcs/github/src/index.test.ts
```
