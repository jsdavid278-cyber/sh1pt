# nixpkgs

sh1pt module for nixpkgs.

## Package

- Name: `@profullstack/sh1pt-target-pkg-nix`
- Path: `packages/targets/pkg-nix`
- Adapter ID: `pkg-nix`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-nix
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-nix typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-nix/src/index.test.ts
```
