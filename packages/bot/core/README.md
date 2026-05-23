# BOT Core

sh1pt module for BOT Core.

## Package

- Name: `@sh1pt/bot-core`
- Path: `packages/bot/core`

## Scripts

- `build`: `tsc -p tsconfig.json`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @sh1pt/bot-core
```

## Development

```bash
pnpm --filter @sh1pt/bot-core typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bot/core/src/index.test.ts
```
