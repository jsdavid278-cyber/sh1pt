# Product Hunt

sh1pt module for Product Hunt.

## Package

- Name: `@profullstack/sh1pt-outreach-producthunt`
- Path: `packages/outreach/producthunt`
- Adapter ID: `outreach-producthunt`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-outreach-producthunt
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-outreach-producthunt typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/outreach/producthunt/src/index.test.ts
```
