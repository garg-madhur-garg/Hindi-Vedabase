const CACHE_NAME = 'hindi-vedabase-v3.12';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/main.css',
  './js/bg-chapters-data.js',
  './js/iso-chapters-data.js',
  './js/cc-chapters-data.js',
  './js/sb-chapters-data.js',
  './js/search.js',
  './js/app.js',
  './data/bhagavad-gita/bg-manifest.json',
  './data/isopanisad/iso-manifest.json',
  './data/chaitanya-charitamrita/cc-manifest.json',
  './data/srimad-bhagavatam/cantos-manifest.json',
  './vedabase.ico',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Network-First strategy: Always fetch latest version from server/disk, fallback to cache if offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});
