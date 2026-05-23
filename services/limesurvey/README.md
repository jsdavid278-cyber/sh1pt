# Limesurvey

Online survey tool.

## Package

- Name: `@profullstack/sh1pt-service-limesurvey`
- Path: `services/limesurvey`
- Adapter ID: `service-limesurvey`
- Category: `forms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-limesurvey
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-limesurvey typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/limesurvey/src/index.test.ts
```
