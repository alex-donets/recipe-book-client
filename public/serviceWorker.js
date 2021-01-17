const staticCacheName = 'recipe-static-v1.0';
const dynamicCacheName = 'recipe-dynamic-v1.0';

const staticAssets = [
    '/index.html',
    '/serviceWorker.js',
];

self.addEventListener('install', async (event) => {
    await event.waitUntil(self.clients.claim());

    const cache = await caches.open(staticCacheName);
    await cache.addAll((staticAssets));
    console.log("Service worker has been installed")
});

self.addEventListener('activate', async () => {
    const cachesKeys = await caches.keys();

    const checkKeys = cachesKeys.map(async (key) => {
        if (staticCacheName !== key) {
            await caches.delete(key);
        }
    });

    await Promise.all(checkKeys);
});

self.addEventListener('fetch', async (event) => {
    if (!navigator.onLine) {
        event.respondWith(checkCache(event.request));
    } else if (event.request.method === "GET") {
        await addResToDynamicCache(event.request);
    }
});

const addResToDynamicCache = async(req) => {
    try {
        const cache = await caches.open(dynamicCacheName);
        const res = await fetch(req);

        await cache.put(req, res.clone());
    } catch (e) {
        console.warn(`Failed adding ${req.url} to cache.`);
    }
};

const checkCache = async(req) => {
    const cachedResponce = await caches.match(req);

    if (cachedResponce) {
        return cachedResponce;
    } else {
        //TODO add redirecting non-cached response to '/offline'
        //TODO add replacing non-cached images to default image
    }
};
