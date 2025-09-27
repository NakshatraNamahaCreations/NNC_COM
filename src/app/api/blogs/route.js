// src/app/api/blogs/route.js
import { NextResponse } from 'next/server';

const UPSTREAM = 'https://api.nakshatranamahacreations.in/api/blogs'; // <-- fixed
const TIMEOUT_MS = 8000;

export async function GET() {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), TIMEOUT_MS);

  try {
    const r = await fetch(UPSTREAM, {
      headers: { accept: 'application/json' },
      cache: 'no-store',
      signal: ac.signal,
    });

    let payload = null;
    const ct = r.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      try { payload = await r.json(); } catch {}
    }

    // Normalize common shapes to { data: [...] }
    const dataArray =
      Array.isArray(payload) ? payload
      : Array.isArray(payload?.data) ? payload.data
      : Array.isArray(payload?.blogs) ? payload.blogs
      : [];

    if (!r.ok) {
      return NextResponse.json({ data: dataArray, error: `Upstream ${r.status}` }, { status: r.status });
    }
    return NextResponse.json({ data: dataArray }, { status: 200 });
  } catch (e) {
    console.error('Proxy /api/blogs failed:', e?.message || e);
    return NextResponse.json({ data: [], error: 'proxy_failed' }, { status: 502 });
  } finally {
    clearTimeout(t);
  }
}
