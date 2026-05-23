# Firebase Hosting / Functions

sh1pt module for Firebase Hosting / Functions.

## Package

- Name: `@profullstack/sh1pt-target-deploy-firebase`
- Path: `packages/targets/deploy-firebase`
- Adapter ID: `deploy-firebase`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-deploy-firebase
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-deploy-firebase typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/deploy-firebase/src/index.test.ts
```
