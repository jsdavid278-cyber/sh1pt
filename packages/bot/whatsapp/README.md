# BOT Whatsapp

sh1pt module for BOT Whatsapp.

## Package

- Name: `@sh1pt/bot-whatsapp`
- Path: `packages/bot/whatsapp`

## Scripts

- `build`: `tsc -p tsconfig.json`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @sh1pt/bot-whatsapp
```

## Development

```bash
pnpm --filter @sh1pt/bot-whatsapp typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bot/whatsapp/src/index.test.ts
```
