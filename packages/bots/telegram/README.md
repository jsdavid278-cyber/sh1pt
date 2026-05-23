# Telegram

sh1pt module for Telegram.

## Package

- Name: `@profullstack/sh1pt-bot-telegram`
- Path: `packages/bots/telegram`
- Adapter ID: `bot-telegram`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bot-telegram
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bot-telegram typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bots/telegram/src/index.test.ts
```
