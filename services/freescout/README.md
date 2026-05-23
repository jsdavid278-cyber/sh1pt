# Freescout

Open-source helpdesk system.

## Package

- Name: `@profullstack/sh1pt-service-freescout`
- Path: `services/freescout`
- Adapter ID: `service-freescout`
- Category: `helpdesk`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-freescout
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-freescout typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/freescout/src/index.test.ts
```
