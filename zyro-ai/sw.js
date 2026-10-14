const CACHE_NAME = 'zyro-ai-pwa-v2';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './app-icon.svg', './favicon.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL.filter(Boolean))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('zyro-ai-pwa-') && k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  // Always fetch the main HTML from the network first so auth fixes deploy promptly.
  if (url.pathname.endsWith('/index.html') || url.pathname.endsWith('/zyro-ai/') || url.pathname.endsWith('/zyro-ai')) {
    event.respondWith(fetch(req).then(res => {
      if (res && res.ok) caches.open(CACHE_NAME).then(cache => cache.put(req, res.clone()));
      return res;
    }).catch(() => caches.match(req).then(cached => cached || caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => {
    if (res && res.ok) caches.open(CACHE_NAME).then(cache => cache.put(req, res.clone()));
    return res;
  }).catch(() => caches.match('./index.html'))));
});