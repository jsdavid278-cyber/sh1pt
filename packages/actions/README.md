# Action Packs

Built-in sh1pt actions and workflow templates for the Actions Store.

## Package

- Name: `@profullstack/sh1pt-action-packs`
- Path: `packages/actions`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-action-packs
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-action-packs typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/actions/src/index.test.ts
```
