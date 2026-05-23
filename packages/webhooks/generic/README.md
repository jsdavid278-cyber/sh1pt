# Generic HTTP webhook

sh1pt module for Generic HTTP webhook.

## Package

- Name: `@profullstack/sh1pt-webhooks-generic`
- Path: `packages/webhooks/generic`
- Adapter ID: `webhook-generic`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-webhooks-generic
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-webhooks-generic typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/webhooks/generic/src/index.test.ts
```
