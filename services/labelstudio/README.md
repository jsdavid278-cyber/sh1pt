# Labelstudio

Data labeling and annotation tool.

## Package

- Name: `@profullstack/sh1pt-service-labelstudio`
- Path: `services/labelstudio`
- Adapter ID: `service-labelstudio`
- Category: `ai`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-labelstudio
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-labelstudio typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/labelstudio/src/index.test.ts
```
