# Static web (CDN)

sh1pt module for Static web (CDN).

## Package

- Name: `@profullstack/sh1pt-target-web-static`
- Path: `packages/targets/web-static`
- Adapter ID: `web-static`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-web-static
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-web-static typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/web-static/src/index.test.ts
```
