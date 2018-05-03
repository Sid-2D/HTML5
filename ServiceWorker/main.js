if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js', {scope: ''})
						   .then(reg => {
						   		console.log('Registration successful', reg.scope)
						   		if (reg.installing) {
						   			console.log('Service worker installing')
						   		} else if (reg.waiting) {
						   			console.log('Service worker installed')
						   		} else if (reg.active) {
						   			console.log('Service worker active')
						   		}
						   }).catch(err => {
						   		console.log('Registration unsuccessful', err)
						   })
}