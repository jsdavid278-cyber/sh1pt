# Excalidraw

Virtual whiteboard for sketching.

## Package

- Name: `@profullstack/sh1pt-service-excalidraw`
- Path: `services/excalidraw`
- Adapter ID: `service-excalidraw`
- Category: `design`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-excalidraw
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-excalidraw typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/excalidraw/src/index.test.ts
```
