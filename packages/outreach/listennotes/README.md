# Listen Notes (podcast discovery)

sh1pt module for Listen Notes (podcast discovery).

## Package

- Name: `@profullstack/sh1pt-outreach-listennotes`
- Path: `packages/outreach/listennotes`
- Adapter ID: `outreach-listennotes`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-outreach-listennotes
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-outreach-listennotes typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/outreach/listennotes/src/index.test.ts
```
