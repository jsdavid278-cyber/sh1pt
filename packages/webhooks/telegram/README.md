# Telegram (bot sendMessage)

sh1pt module for Telegram (bot sendMessage).

## Package

- Name: `@profullstack/sh1pt-webhooks-telegram`
- Path: `packages/webhooks/telegram`
- Adapter ID: `webhook-telegram`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-webhooks-telegram
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-webhooks-telegram typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/webhooks/telegram/src/index.test.ts
```
