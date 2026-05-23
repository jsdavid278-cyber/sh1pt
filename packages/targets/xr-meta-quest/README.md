# Meta Horizon Store (Quest)

sh1pt module for Meta Horizon Store (Quest).

## Package

- Name: `@profullstack/sh1pt-target-xr-meta-quest`
- Path: `packages/targets/xr-meta-quest`
- Adapter ID: `xr-meta-quest`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-xr-meta-quest
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-xr-meta-quest typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/xr-meta-quest/src/index.test.ts
```
