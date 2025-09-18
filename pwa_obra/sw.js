const CACHE = 'site-app-v1';
const ASSETS = [
  '/', '/index.html', '/pedir.html', '/owner.html',
  '/manifest.json',
  '/assets/styles.css',
  '/assets/pwa.js',
  '/assets/api.js',
  '/assets/config.js', // created from config.default.js
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.pathname.startsWith('/api/')) {
    // Don't cache API; pass-through
    return;
  }
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
