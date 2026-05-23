# Ntfy

HTTP-based pub-sub notification service.

## Package

- Name: `@profullstack/sh1pt-service-ntfy`
- Path: `services/ntfy`
- Adapter ID: `service-ntfy`
- Category: `notifications`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-ntfy
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-ntfy typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/ntfy/src/index.test.ts
```
