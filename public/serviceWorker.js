const staticCacheName = 'recipe-static-v1.0';
const dynamicCacheName = 'recipe-dynamic-v1.0';

const staticAssets = [
    '/index.html',
    '/categories',
    '/',
];

self.addEventListener('install', async (event) => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll((staticAssets));

    console.log("Service Worker has been installed")
});

self.addEventListener('activate', async (event) => {
    const cachesKeys = await caches.keys();

    const checkKeys = cachesKeys.map(async (key) => {
        if (staticCacheName !== key) {
            await caches.delete(key);
        }
    });

    await Promise.all(checkKeys);
});

self.addEventListener('fetch', async (event) => {
    if(!navigator.onLine) {
        event.respondWith(checkCache(event.request));
    }
});

const checkCache = async(req) => {
    const cachedResponce = await caches.match(req);

    return cachedResponce || checkOnline(req);
};

const checkOnline = async(req) => {
    const cache = await caches.open(dynamicCacheName);

    try {
        const res = await fetch(req);
        await cache.put(req, res.clone());

        return res;
    } catch (e) {
        return await cache.match(req);
    }
};
