# Sftpgo

Event-driven SFTP/FTP server.

## Package

- Name: `@profullstack/sh1pt-service-sftpgo`
- Path: `services/sftpgo`
- Adapter ID: `service-sftpgo`
- Category: `files`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-sftpgo
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-sftpgo typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/sftpgo/src/index.test.ts
```
