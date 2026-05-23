# Newt Pangolin

Service tunneling to internet.

## Package

- Name: `@profullstack/sh1pt-service-newt-pangolin`
- Path: `services/newt-pangolin`
- Adapter ID: `service-newt-pangolin`
- Category: `network`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-newt-pangolin
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-newt-pangolin typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/newt-pangolin/src/index.test.ts
```
