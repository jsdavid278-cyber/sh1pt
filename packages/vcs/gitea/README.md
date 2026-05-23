# Gitea / Forgejo / Codeberg

sh1pt module for Gitea / Forgejo / Codeberg.

## Package

- Name: `@profullstack/sh1pt-vcs-gitea`
- Path: `packages/vcs/gitea`
- Adapter ID: `vcs-gitea`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-vcs-gitea
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-vcs-gitea typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/vcs/gitea/src/index.test.ts
```
