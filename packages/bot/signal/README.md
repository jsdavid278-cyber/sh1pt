# BOT Signal

sh1pt module for BOT Signal.

## Package

- Name: `@sh1pt/bot-signal`
- Path: `packages/bot/signal`

## Scripts

- `build`: `tsc -p tsconfig.json`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @sh1pt/bot-signal
```

## Development

```bash
pnpm --filter @sh1pt/bot-signal typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bot/signal/src/index.test.ts
```
