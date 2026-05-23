# Faraday

Vulnerability management platform.

## Package

- Name: `@profullstack/sh1pt-service-faraday`
- Path: `services/faraday`
- Adapter ID: `service-faraday`
- Category: `security`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-faraday
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-faraday typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/faraday/src/index.test.ts
```
