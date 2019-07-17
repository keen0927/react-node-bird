
self.addEventListener('install', event => {
    console.log('인스톨 중...');

    // cache
    event.waitUntil(
        caches.open('static-v1').then(cache => {
            return cache.addAll([
                '',
                '/frontend/serviceWorker.html',
                'https://keen0927.github.io/img/keen-logo__none.png'
            ])
                .then(() => self.skipWaiting());
        })
    );
})

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim())
    console.log('V1 준비됨!');
})

self.addEventListener('fetch', event => {
    // const url = new URL(event.request.url);

    // if (url.origin == location.origin && url.pathname == 'https://keen0927.github.io/img/keen-logo__none.png') {
    //     event.respondWith(caches.match('https://keen0927.github.io/img/keen-logo__none.png'));
    // }
    event.respondWith(
        caches.open('static-v1')
            .then(cache => cache.match(event.request, {ignoreSearch: true}))
            .then(response => {
                return response || fetch(event.request);
            })
    )
});