import { defineTarget, manualSetup } from '@profullstack/sh1pt-core';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// Slack apps — bots, slash commands, workflows, Block Kit surfaces.
// Two distribution tiers:
//   'workspace': installable in one workspace only (no review)
//   'directory': listed in Slack App Directory (full review, 1-2 weeks)
interface Config {
  appId: string;
  clientId: string;
  distribution: 'workspace' | 'directory';
  requestUrl: string;                // events + interactivity endpoint
  name?: string;
  description?: string;
  botDisplayName?: string;
  botEvents?: string[];
  slashCommands?: { command: string; url: string; description: string }[];
  scopes: { bot?: string[]; user?: string[] };
}

const DISTRIBUTIONS = ['workspace', 'directory'] as const;

function yamlString(value: string): string {
  return JSON.stringify(value);
}

function requireDistribution(config: Config): Config['distribution'] {
  const distribution = String(config.distribution ?? '').trim();
  if (!DISTRIBUTIONS.includes(distribution as Config['distribution'])) {
    throw new Error(`chat-slack distribution must be one of: ${DISTRIBUTIONS.join(', ')}`);
  }
  return distribution as Config['distribution'];
}

function requireHttpsUrl(value: string | undefined, field: string): string {
  let url: URL;
  try {
    url = new URL(value ?? '');
  } catch {
    throw new Error(`chat-slack ${field} must be a valid HTTPS URL`);
  }
  if (url.protocol !== 'https:' || !url.hostname) {
    throw new Error(`chat-slack ${field} must be a valid HTTPS URL`);
  }
  return url.toString();
}

function renderList(values: string[], indent: string): string[] {
  return values.map((value) => `${indent}- ${yamlString(value)}`);
}

function normalizeSlashCommands(commands: Config['slashCommands']): NonNullable<Config['slashCommands']> {
  return (commands ?? []).map((command) => {
    const name = command.command.trim();
    if (!/^\/[a-z0-9_-]+$/.test(name)) {
      throw new Error('chat-slack slash command must start with / and contain only lowercase letters, digits, underscores, or hyphens');
    }
    const description = command.description.trim();
    if (!description) throw new Error(`chat-slack slash command "${name}" requires description`);
    return {
      command: name,
      url: requireHttpsUrl(command.url, `slash command ${name} url`),
      description,
    };
  });
}

function renderSlashCommands(commands: NonNullable<Config['slashCommands']>): string[] {
  return commands.flatMap((command) => [
    '    - command: ' + yamlString(command.command),
    '      url: ' + yamlString(command.url),
    '      description: ' + yamlString(command.description),
  ]);
}

function renderSlackManifest(config: Config): string {
  const distribution = requireDistribution(config);
  const requestUrl = requireHttpsUrl(config.requestUrl, 'requestUrl');
  const slashCommands = normalizeSlashCommands(config.slashCommands);
  const appName = config.name ?? config.appId;
  const botDisplayName = config.botDisplayName ?? appName;
  const botScopes = config.scopes.bot ?? [];
  const userScopes = config.scopes.user ?? [];
  const botEvents = config.botEvents ?? [];
  const lines = [
    'display_information:',
    `  name: ${yamlString(appName)}`,
  ];

  if (config.description) {
    lines.push(`  description: ${yamlString(config.description)}`);
  }

  lines.push('features:');
  lines.push('  bot_user:');
  lines.push(`    display_name: ${yamlString(botDisplayName)}`);
  lines.push('    always_online: false');

  if (slashCommands.length) {
    lines.push('  slash_commands:');
    lines.push(...renderSlashCommands(slashCommands));
  }

  lines.push('oauth_config:');
  lines.push(`  client_id: ${yamlString(config.clientId)}`);
  lines.push('  scopes:');

  if (botScopes.length) {
    lines.push('    bot:');
    lines.push(...renderList(botScopes, '      '));
  }

  if (userScopes.length) {
    lines.push('    user:');
    lines.push(...renderList(userScopes, '      '));
  }

  lines.push('settings:');
  lines.push('  event_subscriptions:');
  lines.push(`    request_url: ${yamlString(requestUrl)}`);

  if (botEvents.length) {
    lines.push('    bot_events:');
    lines.push(...renderList(botEvents, '      '));
  }

  lines.push('  interactivity:');
  lines.push('    is_enabled: true');
  lines.push(`    request_url: ${yamlString(requestUrl)}`);
  lines.push(`  org_deploy_enabled: ${distribution === 'directory' ? 'true' : 'false'}`);
  lines.push('  socket_mode_enabled: false');
  lines.push('  token_rotation_enabled: false');
  lines.push('');
  return lines.join('\n');
}

export default defineTarget<Config>({
  id: 'chat-slack',
  kind: 'chat',
  label: 'Slack App Directory',
  async build(ctx, config) {
    const manifestPath = join(ctx.outDir, 'slack-manifest.yaml');
    ctx.log(`render slack app manifest · appId=${config.appId}`);
    await mkdir(ctx.outDir, { recursive: true });
    await writeFile(manifestPath, renderSlackManifest(config), 'utf-8');
    return { artifact: manifestPath };
  },
  async ship(ctx, config) {
    const distribution = requireDistribution(config);
    requireHttpsUrl(config.requestUrl, 'requestUrl');
    normalizeSlashCommands(config.slashCommands);
    const dest = distribution === 'directory' ? 'App Directory (review queue)' : 'workspace (no review)';
    ctx.log(`slack · push app manifest → ${dest}`);
    if (ctx.dryRun) return { id: 'dry-run' };
    // TODO: apps.manifest.update via app-level token, then apps.submit for directory
    return { id: `${config.appId}@${ctx.version}`, url: `https://api.slack.com/apps/${config.appId}` };
  },
  async status(id) {
    return { state: 'in-review', version: id };
  },

  setup: manualSetup({
    label: "Slack App Directory",
    vendorDocUrl: "https://api.slack.com/apps",
    steps: [
      "api.slack.com/apps \u2192 Create New App \u2192 From Manifest",
      "Complete App Directory review (security + scope audit)",
      "Run: sh1pt secret set SLACK_APP_DIRECTORY_TOKEN <token>",
    ],
  }),
});
