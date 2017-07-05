function MyController($scope) {
	var updateClock = () => {
		$scope.clock = new Date()
	}
	setInterval(() => {
		$scope.$apply(updateClock)
	}, 1)
	updateClock()
}

var app = angular.module('app', [])

app.controller('FirstController', function($scope) {
	$scope.message = "hello"
})

app.controller('ParentController', function($scope) {
	$scope.person = { greeted: false }
})

app.controller('ChildController', function($scope) {
	$scope.sayHello = function() {
		$scope.person.name = "Sid"
		$scope.person.greeted = true
	}
})