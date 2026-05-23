# Chaskiq

Messaging platform for marketing and support.

## Package

- Name: `@profullstack/sh1pt-service-chaskiq`
- Path: `services/chaskiq`
- Adapter ID: `service-chaskiq`
- Category: `helpdesk`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-chaskiq
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-chaskiq typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/chaskiq/src/index.test.ts
```
