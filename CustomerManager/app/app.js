var app = angular.module('personalesApp', ['ngRoute']);

//Aqui configuramos las rutas y asociamos cada ruta con una vista y un controlador
app.config(function($routeProvider){
	$routeProvider
		.when('/personales',{
			controller: 'PersonalesController',
			templateUrl: '/angular/customermanager/app/partials/personales.html'
		})
		//Definimos una ruta con un parametro en el(:personalID)
		.when('/personalordenes/:personalID',{
			controller: 'PersonalOrdenesController',
			templateUrl: '/angular/customermanager/app/partials/personalordenes.html'
		})
		//Definimos una ruta para las ordenes
		.when('/ordenes', {
			controller: 'OrdenesController',
			templateUrl: '/angular/customermanager/app/partials/ordenes.html'
		})
		.otherwise({redirectTo: '/personales'});
});