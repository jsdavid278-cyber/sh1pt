import { defineTarget, manualSetup } from '@profullstack/sh1pt-core';
import { join } from 'node:path';

// Telegram bots. No "store" means a bot is just a token + webhook URL. This
// adapter registers the webhook with Telegram, sets commands/description/
// about text, and optionally submits to bot directories (t.me/BotFather,
// storebot.me, combot.org). Hosting the bot itself is orthogonal, pair
// with deploy-workers / deploy-fly.
interface Config {
  botUsername: string;               // e.g. 'my_sh1pt_bot' (no @)
  webhookUrl: string;                // where Telegram will POST updates
  commands?: { command: string; description: string }[];
  description?: string;
  shortDescription?: string;
  tokenKey?: string;                 // defaults to TELEGRAM_BOT_TOKEN
  webhookSecretKey?: string;         // optional secret_token value for setWebhook
  directoryListings?: ('storebot.me' | 'combot.org')[];
}

interface TelegramResponse<T> {
  ok: boolean;
  result?: T;
  description?: string;
  error_code?: number;
}

type TelegramCommand = { command: string; description: string };

export default defineTarget<Config>({
  id: 'chat-telegram',
  kind: 'chat',
  label: 'Telegram Bot',
  async build(ctx, config) {
    const username = normalizeUsername(config.botUsername);
    requireWebhookUrl(config.webhookUrl);
    ctx.log(`telegram prepare bot manifest for @${username}`);
    return { artifact: join(ctx.outDir, `telegram-${safeFilename(username)}.json`) };
  },
  async ship(ctx, config) {
    const username = normalizeUsername(config.botUsername);
    const webhookUrl = requireWebhookUrl(config.webhookUrl);
    const commands = config.commands?.map(normalizeCommand) ?? [];
    ctx.log(`telegram setWebhook + setMyCommands for @${username}`);
    if (ctx.dryRun) return { id: 'dry-run' };

    const tokenKey = config.tokenKey ?? 'TELEGRAM_BOT_TOKEN';
    const token = ctx.secret(tokenKey);
    if (!token) throw new Error(`${tokenKey} not in vault - run: sh1pt secret set ${tokenKey} <bot-token>`);

    await callTelegram(ctx.log, token, 'setWebhook', {
      url: webhookUrl,
      ...(config.webhookSecretKey ? { secret_token: requireSecret(ctx, config.webhookSecretKey) } : {}),
    });

    if (commands.length) {
      await callTelegram(ctx.log, token, 'setMyCommands', {
        commands,
      });
    }

    if (config.description) {
      await callTelegram(ctx.log, token, 'setMyDescription', { description: config.description });
    }

    if (config.shortDescription) {
      await callTelegram(ctx.log, token, 'setMyShortDescription', { short_description: config.shortDescription });
    }

    return { id: `@${username}@${ctx.version}`, url: `https://t.me/${username}` };
  },
  async status(id) {
    return { state: 'live', version: id };
  },

  setup: manualSetup({
    label: "Telegram Bot (@BotFather)",
    vendorDocUrl: "https://t.me/BotFather",
    steps: [
      "Open Telegram -> chat with @BotFather -> /newbot",
      "Copy the HTTP API token - sh1pt will store it",
      "Run: sh1pt secret set TELEGRAM_BOT_TOKEN <token>",
    ],
  }),
});

async function callTelegram<T>(
  log: (msg: string, level?: 'info' | 'warn' | 'error') => void,
  token: string,
  method: string,
  body: Record<string, unknown>,
): Promise<T | undefined> {
  log(`telegram ${method}`);
  const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json() as TelegramResponse<T>;
  if (!res.ok || !data.ok) {
    throw new Error(data.description ?? `Telegram ${method} failed (${res.status})`);
  }
  return data.result;
}

function normalizeUsername(username: string): string {
  const clean = username.replace(/^@/, '').trim();
  if (!clean) throw new Error('botUsername is required');
  return clean;
}

function requireWebhookUrl(value: string): string {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error('chat-telegram webhookUrl must be a valid HTTPS URL');
  }
  if (url.protocol !== 'https:' || !url.hostname) {
    throw new Error('chat-telegram webhookUrl must be a valid HTTPS URL');
  }
  return url.toString();
}

function safeFilename(value: string): string {
  return value.replace(/[^a-zA-Z0-9_-]/g, '_');
}

function normalizeCommand(command: TelegramCommand): TelegramCommand {
  const name = command.command.replace(/^\//, '').trim().toLowerCase();
  if (!/^[a-z0-9_]{1,32}$/.test(name)) {
    throw new Error('chat-telegram command must be 1-32 lowercase letters, digits, or underscores');
  }
  const description = command.description.trim();
  if (!description) throw new Error(`chat-telegram command "${name}" requires description`);
  return {
    command: name,
    description,
  };
}

function requireSecret(ctx: { secret(key: string): string | undefined }, key: string): string {
  const value = ctx.secret(key);
  if (!value) throw new Error(`${key} not in vault - run: sh1pt secret set ${key} <value>`);
  return value;
}
