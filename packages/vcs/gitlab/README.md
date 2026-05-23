# GitLab

sh1pt module for GitLab.

## Package

- Name: `@profullstack/sh1pt-vcs-gitlab`
- Path: `packages/vcs/gitlab`
- Adapter ID: `vcs-gitlab`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-vcs-gitlab
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-vcs-gitlab typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/vcs/gitlab/src/index.test.ts
```
