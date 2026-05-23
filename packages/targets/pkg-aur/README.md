# Arch User Repository (AUR)

sh1pt module for Arch User Repository (AUR).

## Package

- Name: `@profullstack/sh1pt-target-pkg-aur`
- Path: `packages/targets/pkg-aur`
- Adapter ID: `pkg-aur`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-aur
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-aur typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-aur/src/index.test.ts
```
