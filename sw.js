// Service Worker sederhana agar memenuhi syarat instalasi PWA di Chrome
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Meneruskan request jaringan seperti biasa
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
