/* eslint-disable no-console */
const cacheName = 'hacker_koans-v-1.0.6';
const filesToCache = [
  './app.bundle.js',
  './font.bundle.js',
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0',
  'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/fonts/devicon.woff?-hdf3wh',
  'https://fonts.gstatic.com/s/cutivemono/v6/N5odNRruTwjvCM8y77PhQaE8kM4xWR1_1bYURRojRGc.woff2',
  'https://fonts.gstatic.com/s/cutivemono/v6/N5odNRruTwjvCM8y77PhQYgp9Q8gbYrhqGlRav_IXfk.woff2',
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
