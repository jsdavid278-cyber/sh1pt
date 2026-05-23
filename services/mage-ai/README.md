# Mage Ai

Data pipeline builder.

## Package

- Name: `@profullstack/sh1pt-service-mage-ai`
- Path: `services/mage-ai`
- Adapter ID: `service-mage-ai`
- Category: `ai`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-mage-ai
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-mage-ai typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/mage-ai/src/index.test.ts
```
