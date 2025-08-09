self.addEventListener('install', function(event) {
  event.waitUntil(caches.open('tambola-cache-v1').then(function(cache) {
    return cache.addAll([
      '/',
      '/index.html',
      '/manifest.json',
      '/service-worker.js',
      '/icon.png'
    ]);
  }));
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});