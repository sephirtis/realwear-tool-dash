const CACHE='tool-dash-v2';const CORE=['./','index.html','styles.css','app.js','manifest.webmanifest','assets/icon.svg','vendor/ort.min.js','vendor/ort-wasm-simd-threaded.wasm','assets/yolov8n.onnx'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(e.request.method==='GET'&&new URL(e.request.url).origin===location.origin){const copy=r.clone();caches.open(CACHE).then(x=>x.put(e.request,copy));}return r;}))));
