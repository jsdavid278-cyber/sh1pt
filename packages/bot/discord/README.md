# BOT Discord

sh1pt module for BOT Discord.

## Package

- Name: `@sh1pt/bot-discord`
- Path: `packages/bot/discord`

## Scripts

- `build`: `tsc -p tsconfig.json`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @sh1pt/bot-discord
```

## Development

```bash
pnpm --filter @sh1pt/bot-discord typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bot/discord/src/index.test.ts
```
