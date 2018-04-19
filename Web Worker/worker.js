self.addEventListener('message', e => {
	let i = 0
	while (i < 3000000000) { i++ }
	postMessage('done')
}, false)