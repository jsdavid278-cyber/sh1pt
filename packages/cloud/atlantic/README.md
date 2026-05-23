# Atlantic.Net (VPS)

sh1pt module for Atlantic.Net (VPS).

## Package

- Name: `@profullstack/sh1pt-cloud-atlantic`
- Path: `packages/cloud/atlantic`
- Adapter ID: `cloud-atlantic`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-cloud-atlantic
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-cloud-atlantic typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/cloud/atlantic/src/index.test.ts
```
