import { defineSocial, oauthSetup } from '@profullstack/sh1pt-core';

// Reddit — text/link/image submissions via /api/submit. Each subreddit
// has its own rules + karma requirements; self-promotion in the wrong
// sub is the fastest way to get an account shadow-banned.
interface Config {
  subreddit: string;           // without 'r/' prefix
  kind?: 'self' | 'link' | 'image';
  flairId?: string;
}

export default defineSocial<Config>({
  id: 'social-reddit',
  label: 'Reddit',
  requires: { maxBodyChars: 40_000, maxHashtags: 0 },   // Reddit doesn't use hashtags
  async connect(ctx) {
    if (!ctx.secret('REDDIT_ACCESS_TOKEN') && !ctx.secret('REDDIT_REFRESH_TOKEN')) {
      throw new Error('Reddit needs REDDIT_ACCESS_TOKEN or REDDIT_REFRESH_TOKEN in vault');
    }
    return { accountId: 'reddit' };
  },
  async post(ctx, post, config) {
    ctx.log(`reddit submit · r/${config.subreddit} · kind=${config.kind ?? 'self'}`);
    if (ctx.dryRun) return { id: 'dry-run', url: `https://reddit.com/r/${config.subreddit}`, platform: 'reddit', publishedAt: new Date().toISOString() };
    // TODO: POST /api/submit with { sr, kind, title, text|url, flair_id }
    return { id: `rd_${Date.now()}`, url: `https://reddit.com/r/${config.subreddit}`, platform: 'reddit', publishedAt: new Date().toISOString() };
  },

  setup: oauthSetup({
    secretKey: 'REDDIT_ACCESS_TOKEN',
    label: 'Reddit',
    vendorDocUrl: 'https://www.reddit.com/prefs/apps',
    steps: [
      'Open reddit.com/prefs/apps -> create another app -> installed app',
      'Set redirect URI to http://127.0.0.1:8765/callback',
      'Copy the client id (under the app name) - installed apps have no secret',
      'sh1pt opens the OAuth flow; refresh tokens are saved automatically',
    ],
    // Reddit installed-app PKCE. The token endpoint demands Basic auth
    // even for installed apps (client_id with an empty password); the
    // helper passes that through `tokenAuthHeader`.
    ...(process.env.SH1PT_REDDIT_CLIENT_ID
      ? {
          loopback: {
            clientId: process.env.SH1PT_REDDIT_CLIENT_ID,
            authUrl: 'https://www.reddit.com/api/v1/authorize',
            tokenUrl: 'https://www.reddit.com/api/v1/access_token',
            scopes: ['submit', 'read', 'identity', 'edit', 'flair'],
            refreshSecretKey: 'REDDIT_REFRESH_TOKEN',
            extraAuthParams: { duration: 'permanent' },
            tokenAuthHeader: `Basic ${Buffer.from(`${process.env.SH1PT_REDDIT_CLIENT_ID}:`).toString('base64')}`,
          },
        }
      : {}),
  }),
});
