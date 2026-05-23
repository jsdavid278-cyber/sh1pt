# Gitlab

All-in-one DevOps platform.

## Package

- Name: `@profullstack/sh1pt-service-gitlab`
- Path: `services/gitlab`
- Adapter ID: `service-gitlab`
- Category: `vcs`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-gitlab
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-gitlab typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/gitlab/src/index.test.ts
```
