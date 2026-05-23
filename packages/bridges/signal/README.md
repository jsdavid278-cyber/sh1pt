# Signal

sh1pt module for Signal.

## Package

- Name: `@profullstack/sh1pt-bridge-signal`
- Path: `packages/bridges/signal`
- Adapter ID: `${source}:${data.timestamp ?? envelope.timestamp ?? Date.now()}`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bridge-signal
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bridge-signal typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bridges/signal/src/index.test.ts
```
