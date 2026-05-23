# Open Archiver

Email archiving solution.

## Package

- Name: `@profullstack/sh1pt-service-open-archiver`
- Path: `services/open-archiver`
- Adapter ID: `service-open-archiver`
- Category: `mail`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-open-archiver
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-open-archiver typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/open-archiver/src/index.test.ts
```
