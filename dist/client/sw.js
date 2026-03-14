const CACHE_NAME = 'chieffin-v1';
const ASSETS = [
  '/',
  '/offline',
  '/global.css' // Asegurate de poner aquí tus archivos CSS/JS principales
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});