# Chatwoot

Customer relationship management at scale.

## Package

- Name: `@profullstack/sh1pt-service-chatwoot`
- Path: `services/chatwoot`
- Adapter ID: `service-chatwoot`
- Category: `helpdesk`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-chatwoot
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-chatwoot typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/chatwoot/src/index.test.ts
```
