// let CACHE_NAME = "my-site-cache-v1";
// const urlsToCache = [
//     '/',
//     '/forms',
//     '/bindings',
//     '/http',
//     '/index.html',
//     '/dummyData.json',
//     '/src/App.js',
//     '/src/index.js',
//     '/src/images/doggo1.jpg',
//     '/src/images/doggo2.jpg',
//     '/src/images/doggo3.webp',
//     '/src/images/doggo4.jpg',
//     '/src/images/doggo5.jpeg',
//     '/src/images/robbenbaby1.jpg',
//     '/src/images/robbenbaby2.jpg',
//     '/src/images/robbenbaby4.jpg',
// ];

// self.addEventListener("install", event => {
//     // Perform install steps
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(function (cache) {
//                 console.log("Opened cache");
//                 return cache.addAll(urlsToCache);
//             })
//     );
//     self.skipWaiting();
// });

// self.addEventListener("fetch", event => {
//     event.respondWith(caches.match(event.request)
//         .then(function (response) {
//             if (response) {
//                 return response;
//             }
//             return fetch(event.request);
//         })
//     );
// });

// // Update a service worker
// self.addEventListener('activate', event => {
//     var cacheWhitelist = ['my-site-cache-v1'];
//     event.waitUntil(
//       caches.keys().then(cacheNames => {
//         return Promise.all(
//           cacheNames.map(cacheName => {
//             if (cacheWhitelist.indexOf(cacheName) === -1) {
//               return caches.delete(cacheName);
//             }
//           })
//         );
//       })
//     );
//   });

self.addEventListener('fetch', (event) => {
    event.respondWith(
        cacheFirst({
            request: event.request,
            preloadResponsePromise: event.preloadResponse,
        })
    );
});

const addResourcesToCache = async (resources) => {
    const cache = await caches.open('v1');
    await cache.addAll(resources);
};

const putInCache = async (request, response) => {
    const cache = await caches.open('v1');
    await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
    // First try to get the resource from the cache
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
        return responseFromCache;
    }

    // Next try to use the preloaded response, if it's there
    const preloadResponse = await preloadResponsePromise;
    if (preloadResponse) {
        console.info('using preload response', preloadResponse);
        putInCache(request, preloadResponse.clone());
        return preloadResponse;
    };

    // Next try to get the resource from the network
    try {
        const responseFromNetwork = await fetch(request);
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        putInCache(request, responseFromNetwork.clone());
        return responseFromNetwork;
    } catch (error) {
        const fallbackResponse = await caches.match(fallbackUrl);
        if (fallbackResponse) {
            return fallbackResponse;
        }
        // when even the fallback response is not available,
        // there is nothing we can do, but we must always
        // return a Response object
        return new Response('Network error happened', {
            status: 408,
            headers: { 'Content-Type': 'text/plain' },
        });
    }
};

const enableNavigationPreload = async () => {
    if (self.registration.navigationPreload) {
        // Enable navigation preloads!
        await self.registration.navigationPreload.enable();
    }
};

self.addEventListener('activate', (event) => {
    event.waitUntil(enableNavigationPreload());
});

self.addEventListener('install', (event) => {
    event.waitUntil(
        addResourcesToCache([
            '/src/',
            '/index.html',
            '/dummyData.json',
            '/src/App.js',
            '/src/index.js',
            '/src/images/doggo1.jpg',
            '/src/images/doggo2.jpg',
            '/src/images/doggo3.webp',
            '/src/images/doggo4.jpg',
            '/src/images/doggo5.jpeg',
            '/src/images/robbenbaby1.jpg',
            '/src/images/robbenbaby2.jpg',
            '/src/images/robbenbaby4.jpg',
        ])
    );
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        cacheFirst({
            request: event.request,
            preloadResponsePromise: event.preloadResponse,
        })
    );
});