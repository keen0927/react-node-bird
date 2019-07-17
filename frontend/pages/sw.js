import React from 'react';

const sw = () => {

    self.addEventListener('install', event => {
        console.log('V1 installing...');
    
        // cache
        event.waitUntil(
            caches.open('static-v1')
                .then(cache => cache.add('https://keen0927.github.io/img/keen-logo__none.png'))
        );
    })
    
    self.addEventListener('activate', event => {
        console.log('V1 now ready to handle fetches!');
    })
    
    self.addEventListener('fetch', event => {
        const url = new URL(event.request.url);
    
        if (url.origin == location.origin && ual.pathname == 'https://keen0927.github.io/img/keen-logo__none.png') {
            event.respondWith(caches.match('https://keen0927.github.io/img/keen-logo__none.png'));
        }
    });

    return (
        <div></div>
    )
}

export default sw;