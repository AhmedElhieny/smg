const CACHE_NAME = "app-cache-v1";
const urlsToCache = ["./adhkar-after-prayer.html","./magdy.html","./all.min.css","./quran-text.html","./dua-khatm.html","./khutub.html","./m.html","./prayer-times.html", "./index.html", "./normalize.css", "./quran.css", "./quranPlayer.js", "./adhkar-evening.html","./home.html","./arbain.html","./bukhari.html", "./adhkar-mosque.html", "./adhkar-sleep.html", "./adhkar-travel.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
