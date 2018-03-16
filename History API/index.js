let state = 0

function push() {
	history.pushState(
		{ state: ++state },
		"State " + state,
		"?state=" + state
	)
	document.getElementById('display').innerHTML = state
}

function pop() {
	window.history.back()
}

// To be tested
function go() {
	window.history.go(3)
	history.replaceState({page: 3}, "title 3", "?page=3")
}

function reduceState() {
	document.getElementById('display').innerHTML = --state
}

window.onpopstate = e => {
	console.log("location: " + document.location + ", state: " + JSON.stringify(event.state))
	reduceState()
}