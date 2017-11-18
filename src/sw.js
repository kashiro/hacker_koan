/* eslint-disable no-console */
const cacheName = 'hacker_koans-v-4';
const filesToCache = [
  '/',
  '/index.html',
  '/app.bundle.js',
  '/font.bundle.js',
];

self.addEventListener('install', e => {
  console.log('[service worker] Installed');
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('[service worker] Caching');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', e => {
  console.log('[service worker] Activated');
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => {
        if(key !== cacheName) {
          console.log('[service worker] Removing old cache', key);
          return caches.delete(key);
        }
      }))
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      if(response) {
        console.log('[service worker]  return: ', e.request.url);
      } else {
        console.log('[service worker]  request: ', e.request.url);
      }
      return response || fetch(e.request)
    })
  );
});
