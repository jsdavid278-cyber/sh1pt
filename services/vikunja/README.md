# Vikunja

Open-source to-do application.

## Package

- Name: `@profullstack/sh1pt-service-vikunja`
- Path: `services/vikunja`
- Adapter ID: `service-vikunja`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-vikunja
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-vikunja typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/vikunja/src/index.test.ts
```
