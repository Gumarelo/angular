//Define an angular module for our app
var sampleApp = angular.module('sampleApp', [])

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and controller ShowOrdersController
sampleApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/AddNewOrder',{
				templateUrl: 'templates/add_order.html',
				controller: 'CommonController',
				fooData: 'addOrder'
			}).
			when('/ShowOrders',{
				templateUrl: 'templates/show_orders.html',
				controller: 'CommonController',
				fooData: 'ShowOrder'
			});
	}]);

sampleApp.controller('CommonController', function($scope, $route){
	//Accedemos a la propiedad fooData usando $route.current
	var foo = $route.current.fooData;

	$scope.message = foo;

	alert(foo);
});
