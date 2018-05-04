let CACHE_NAME = 'sw-cache-v2'
let urlsToCache = [
	'/main.js'
]

self.addEventListener('install', e => {
	console.log('At service worker')
	e.waitUntil(
		caches.open(CACHE_NAME)
			  .then(cache => {
			  		console.log('Opened cache')
			  		return cache.addAll(urlsToCache)
			  })
	)
	console.log('Caching complete')
})

self.addEventListener('fetch', e => {
	console.log(e.request)
	e.respondWith(
		fetch(e.request)
	)
})