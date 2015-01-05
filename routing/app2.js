//Define an angular module for our app
var sampleApp = angular.module('sampleApp', [])

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and controller ShowOrdersController
sampleApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/ShowOrder/:orderId', {
				templateUrl: 'templates/show_order.html',
				controller: 'ShowOrderControllerById'
			});
	}]);

sampleApp.controller('ShowOrderControllerById', function($scope, $routeParams){
	$scope.order_id = $routeParams.orderId;
})