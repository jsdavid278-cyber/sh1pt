# Joplin

Note sync server.

## Package

- Name: `@profullstack/sh1pt-service-joplin`
- Path: `services/joplin`
- Adapter ID: `service-joplin`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-joplin
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-joplin typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/joplin/src/index.test.ts
```
