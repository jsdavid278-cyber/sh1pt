# BOT Telegram

sh1pt module for BOT Telegram.

## Package

- Name: `@sh1pt/bot-telegram`
- Path: `packages/bot/telegram`

## Scripts

- `build`: `tsc -p tsconfig.json`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @sh1pt/bot-telegram
```

## Development

```bash
pnpm --filter @sh1pt/bot-telegram typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bot/telegram/src/index.test.ts
```
