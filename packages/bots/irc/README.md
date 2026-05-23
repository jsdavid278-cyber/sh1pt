# IRC

sh1pt module for IRC.

## Package

- Name: `@profullstack/sh1pt-bot-irc`
- Path: `packages/bots/irc`
- Adapter ID: `unknown`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bot-irc
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bot-irc typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bots/irc/src/index.test.ts
```
