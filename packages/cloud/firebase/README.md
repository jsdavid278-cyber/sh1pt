# Firebase (Hosting / Functions / Firestore / Storage)

sh1pt module for Firebase (Hosting / Functions / Firestore / Storage).

## Package

- Name: `@profullstack/sh1pt-cloud-firebase`
- Path: `packages/cloud/firebase`
- Adapter ID: `cloud-firebase`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-cloud-firebase
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-cloud-firebase typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/cloud/firebase/src/index.test.ts
```
