# VS Code Marketplace

sh1pt module for VS Code Marketplace.

## Package

- Name: `@profullstack/sh1pt-target-plugin-vscode`
- Path: `packages/targets/plugin-vscode`
- Adapter ID: `plugin-vscode`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-plugin-vscode
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-plugin-vscode typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/plugin-vscode/src/index.test.ts
```
