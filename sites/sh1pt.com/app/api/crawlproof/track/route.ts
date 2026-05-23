import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const CRAWLPROOF_SITE_ID = '09d382f0-1b98-4d28-b360-78eaf4e030f2';
const CRAWLPROOF_TRACK_ENDPOINT = 'https://crawlproof.com/api/track';

interface TrackPayload {
  ref?: unknown;
  path?: unknown;
}

export async function POST(req: NextRequest) {
  let payload: TrackPayload;
  try {
    payload = (await req.json()) as TrackPayload;
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const path = normalizeString(payload.path, 2048);
  if (!path || !path.startsWith('/')) {
    return new NextResponse(null, { status: 204 });
  }

  const body = JSON.stringify({
    site: CRAWLPROOF_SITE_ID,
    ref: normalizeString(payload.ref, 2048) || null,
    path,
  });

  try {
    await fetch(CRAWLPROOF_TRACK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      cache: 'no-store',
    });
  } catch {
    // Analytics must never affect page loads.
  }

  return new NextResponse(null, { status: 204 });
}

function normalizeString(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.slice(0, maxLength);
}
