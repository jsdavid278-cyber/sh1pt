# Signal (signal-cli)

sh1pt module for Signal (signal-cli).

## Package

- Name: `@profullstack/sh1pt-bot-signal`
- Path: `packages/bots/signal`
- Adapter ID: `bot-signal`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bot-signal
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bot-signal typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bots/signal/src/index.test.ts
```
