# Nexus

Universal repository manager (x86_64).

## Package

- Name: `@profullstack/sh1pt-service-nexus`
- Path: `services/nexus`
- Adapter ID: `service-nexus`
- Category: `registry`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-nexus
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-nexus typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/nexus/src/index.test.ts
```
