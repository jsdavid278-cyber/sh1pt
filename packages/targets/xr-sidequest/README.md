# SideQuest (Quest sideload)

sh1pt module for SideQuest (Quest sideload).

## Package

- Name: `@profullstack/sh1pt-target-xr-sidequest`
- Path: `packages/targets/xr-sidequest`
- Adapter ID: `xr-sidequest`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-xr-sidequest
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-xr-sidequest typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/xr-sidequest/src/index.test.ts
```
