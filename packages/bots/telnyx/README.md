# Telnyx (SMS + Voice)

sh1pt module for Telnyx (SMS + Voice).

## Package

- Name: `@profullstack/sh1pt-bot-telnyx`
- Path: `packages/bots/telnyx`
- Adapter ID: `bot-telnyx`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bot-telnyx
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bot-telnyx typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bots/telnyx/src/index.test.ts
```
