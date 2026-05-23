# Jupyter Notebook Python

Interactive notebook application.

## Package

- Name: `@profullstack/sh1pt-service-jupyter-notebook-python`
- Path: `services/jupyter-notebook-python`
- Adapter ID: `service-jupyter-notebook-python`
- Category: `ide`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-jupyter-notebook-python
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-jupyter-notebook-python typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/jupyter-notebook-python/src/index.test.ts
```
