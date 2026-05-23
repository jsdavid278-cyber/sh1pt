# vu1nz Actions Security Scanner

sh1pt module for vu1nz Actions Security Scanner.

## Package

- Name: `@profullstack/sh1pt-agent-vu1nz`
- Path: `packages/agents/vu1nz`
- Adapter ID: `agent-vu1nz`

## Scripts

- `build`: `tsc -p tsconfig.json`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-agent-vu1nz
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-agent-vu1nz typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/agents/vu1nz/src/index.test.ts
```
