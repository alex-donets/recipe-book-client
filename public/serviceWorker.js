const version = 'v2.0';
const staticCacheName = `recipe-static-${version}`;
const dynamicCacheName = `recipe-dynamic-${version}`;

const staticAssets = [
    '/index.html',
    '/serviceWorker.js',
];

self.addEventListener('install', async () => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll((staticAssets));
    await self.skipWaiting();

    console.log(`Service worker ${version} has been installed.`);
});

self.addEventListener('activate', async () => {
    const cachesKeys = await caches.keys();

    const keys = cachesKeys.map(async (key) => {
        if (staticCacheName !== key) {
            await caches.delete(key);
        }
    });

    await Promise.all(keys);

    console.log(`Service worker ${version} has been activated.`);
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
