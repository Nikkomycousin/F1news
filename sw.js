// Service worker: app sempre aggiornata quando c'è rete, funziona anche offline con l'ultima copia.
const CACHE = "motortime-v4";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-180.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // rete prima, poi cache (dati e pagina sempre freschi)
  e.respondWith(
    fetch(url.href, {cache: "no-cache"}).then(r => {
      const copy = r.clone();
      const key = url.pathname.includes("/data/") ? url.origin + url.pathname : e.request;
      caches.open(CACHE).then(c => c.put(key, copy));
      return r;
    }).catch(() => caches.match(url.pathname.includes("/data/") ? url.origin + url.pathname : e.request))
  );
});
