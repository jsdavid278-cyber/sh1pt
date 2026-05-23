# F-Droid (Android FOSS repo)

sh1pt module for F-Droid (Android FOSS repo).

## Package

- Name: `@profullstack/sh1pt-target-pkg-fdroid`
- Path: `packages/targets/pkg-fdroid`
- Adapter ID: `pkg-fdroid`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-fdroid
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-fdroid typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-fdroid/src/index.test.ts
```
