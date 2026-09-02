/* Service worker minimal : l'appli fonctionne hors-ligne une fois ouverte.
   Change le numéro de version pour forcer la mise à jour sur les téléphones. */
const CACHE = "ninja-v2";
const FILES = ["./", "./index.html", "./programme.js", "./manifest.webmanifest", "./icon.svg"];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).catch(()=>{}));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if(e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if(url.origin !== location.origin) return;     // YouTube etc. : réseau direct
  e.respondWith(
    // cache:"no-store" : on ignore le cache HTTP du téléphone et on va TOUJOURS
    // vérifier sur le réseau, sinon une mise à jour peut rester invisible
    // pendant des heures/jours même après un rechargement de la page.
    fetch(e.request, {cache: "no-store"})
      .then(r => { const cp = r.clone();
                   caches.open(CACHE).then(c => c.put(e.request, cp)).catch(()=>{});
                   return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});
