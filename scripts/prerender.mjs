// Prerender TanStack Start routes into static HTML files.
// Reads the built Cloudflare Worker bundle and invokes its fetch handler
// for each route, writing the resulting HTML into dist/client/.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const SERVER_ENTRY = path.join(ROOT, 'dist/server/index.mjs');
const CLIENT_DIR = path.join(ROOT, 'dist/client');
const STATIC_DIR = path.join(ROOT, 'static');

// List of routes to prerender. Add more paths here as the site grows.
const ROUTES = ['/'];

if (!fs.existsSync(SERVER_ENTRY)) {
  console.error('[prerender] dist/server/index.mjs not found. Run vite build first.');
  process.exit(1);
}

const mod = await import(pathToFileURL(SERVER_ENTRY).href);
const handler = mod.default || mod.fetch || mod;
const fetchFn = handler.fetch || handler;

for (const route of ROUTES) {
  const url = `http://localhost${route}`;
  const res = await fetchFn(new Request(url), {}, { waitUntil: () => {}, passThroughOnException: () => {} });
  const html = await res.text();
  const outPath = route === '/'
    ? path.join(CLIENT_DIR, 'index.html')
    : path.join(CLIENT_DIR, route.replace(/^\//, ''), 'index.html');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`[prerender] ${route} -> ${path.relative(ROOT, outPath)} (${res.status}, ${html.length} bytes)`);
}

// Copy dist/client into ./static so the user has a single deploy-ready folder.
fs.rmSync(STATIC_DIR, { recursive: true, force: true });
fs.cpSync(CLIENT_DIR, STATIC_DIR, { recursive: true });
console.log(`[prerender] Static site copied to ${path.relative(ROOT, STATIC_DIR)}/`);
