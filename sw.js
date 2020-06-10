/* eslint strict: 0 */

'use strict';
self.addEventListener('install', event => {
    console.log("evento install "+event);
});

self.addEventListener('fetch', event => {
    console.log("evento fetch "+event);
});
