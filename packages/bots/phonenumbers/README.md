# phonenumbers.bot

sh1pt module for phonenumbers.bot.

## Package

- Name: `@profullstack/sh1pt-bot-phonenumbers`
- Path: `packages/bots/phonenumbers`
- Adapter ID: `bot-phonenumbers`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bot-phonenumbers
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bot-phonenumbers typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bots/phonenumbers/src/index.test.ts
```
