# Bitcoin Core

Self-hosted Bitcoin full node.

## Package

- Name: `@profullstack/sh1pt-service-bitcoin-core`
- Path: `services/bitcoin-core`
- Adapter ID: `service-bitcoin-core`
- Category: `crypto`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-bitcoin-core
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-bitcoin-core typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/bitcoin-core/src/index.test.ts
```
