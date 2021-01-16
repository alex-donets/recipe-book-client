const staticCacheName = 'recipe-static-v1.0';
const dynamicCacheName = 'recipe-dynamic-v1.0';

const staticAssets = [
    '/',
    '/index.html',
    '/categories',
    '/serviceWorker.js',
];

self.addEventListener('install', async () => {
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
    }

    await addResToDynamicCache(event.request);
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

const checkCache = (req) => caches.match(req);

//TODO add redirecting non-cached response to OfflinePage
//TODO add replacing non-cached images to default image
