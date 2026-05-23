# Discord

sh1pt module for Discord.

## Package

- Name: `@profullstack/sh1pt-bridge-discord`
- Path: `packages/bridges/discord`
- Adapter ID: `bridge-discord`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bridge-discord
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bridge-discord typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bridges/discord/src/index.test.ts
```
