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

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status)
})

var options = {
	body: 'This notification was generated from a push!',
	icon: 'image.jpeg',
	vibrate: [100, 50, 100],
	data: {
		dateOfArrival: Date.now(),
		primaryKey: '2'
	}
};

window.showNotification = function() {
	if (Notification.permission == 'granted') {
	navigator.serviceWorker.getRegistration().then(function(reg) {
			reg.showNotification('Hello world!', options)
		})
	}
}