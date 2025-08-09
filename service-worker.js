self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('tambola-store').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/manifest.json',
      '/service-worker.js',
      '/icon.png'
    ]))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
