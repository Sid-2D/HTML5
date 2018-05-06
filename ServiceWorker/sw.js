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
		caches.match(e.request)
			  .then(response => {
			  		if (response) {
			  			console.log('Sending cached response:', response)
			  			return response
			  		}

			  		let fetchRequest = e.request.clone()
			  		return fetch(fetchRequest).then(response => {
			  			if (!response || response.status !== 200 || response.type !== 'basic') {
			  				return response
			  			}
			  			let responseToCache = response.clone()

			  			caches.open(CACHE_NAME)
			  				  .then(cache => {
			  				  		cache.put(e.request, responseToCache)
			  				  })

			  			return response
			  		})
			  })
	)
})