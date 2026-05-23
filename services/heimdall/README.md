# Heimdall

Server application dashboard.

## Package

- Name: `@profullstack/sh1pt-service-heimdall`
- Path: `services/heimdall`
- Adapter ID: `service-heimdall`
- Category: `dashboard`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-heimdall
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-heimdall typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/heimdall/src/index.test.ts
```
