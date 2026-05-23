# Slack App Directory

+ yamlString(command.description),
  ]);
}

function renderSlackManifest(config: Config): string {
  const appName = config.name ?? config.appId;
  const botDisplayName = config.botDisplayName ?? appName;
  const botScopes = config.scopes.bot ?? [];
  const userScopes = config.scopes.user ?? [];
  const botEvents = config.botEvents ?? [];
  const lines = [.

## Package

- Name: `@profullstack/sh1pt-target-chat-slack`
- Path: `packages/targets/chat-slack`
- Adapter ID: `chat-slack`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-chat-slack
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-chat-slack typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/chat-slack/src/index.test.ts
```
