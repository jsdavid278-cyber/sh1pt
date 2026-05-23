# BOT Core

sh1pt module for BOT Core.

## Package

- Name: `@profullstack/sh1pt-bot-core`
- Path: `packages/bots/core`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bot-core
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bot-core typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bots/core/src/index.test.ts
```
