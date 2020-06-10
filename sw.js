/* eslint strict: 0 */

'use strict';


const CACHE="v1",
urls=[
'./funciones.js',
'./estilo.css'
]

self.addEventListener('install', event => {
    console.log("evento install "+event);
    event.waitUntil(
    caches.open(CACHE).then(cache => {
    return cache.addAll(urls)
    .then(()=>self.skipWaiting())})
    .catch(err=> console.log('fallo registro caché', err))
    )

});

self.addEventListener('activate', event => {
    console.log("evento activate "+event);
    const cacheWhitelist = [CACHE]
    event.waitUntil(
    caches.keys().then(cachesNames => {
        cachesNames.map(cachesName => {
            if(cacheWhitelist.indexOf(cachesName) === -1){
            return caches.delete(cachesName)}
        })
    }).then(()=> self.clients.claim())
    )
});

self.addEventListener('fetch', event => {
    console.log("evento fetch "+event);
    event.respondWith(
        caches.match(event.request).then(res => {
            if(res){
                return res
            }
            return fetch(event.request)
        })
    )
});
