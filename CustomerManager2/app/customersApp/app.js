var app = angular.module('personalesApp', ['ngRoute', 'ui.bootstrap']);

//Aqui configuramos las rutas y asociamos cada ruta con una vista y un controlador
app.config(function($routeProvider){
	var viewBase = '/angular/customermanager2/app/customersApp/views/';
	
	$routeProvider
		.when('/personales',{
			controller: 'PersonalesController',
			templateUrl: viewBase + 'personales/personales.html'
		})
		//Definimos una ruta con un parametro en el(:personalID)
		.when('/personalordenes/:personalID',{
			controller: 'PersonalOrdenesController',
			templateUrl: viewBase + 'personales/personalordenes.html'
		})
		.when('/personaleditar/:personalID', {
			controller: 'PersonalEditController',
			templateUrl: viewBase + 'personales/personalEdit.html'
		})
		//Definimos una ruta para las ordenes
		.when('/ordenes', {
			controller: 'OrdenesController',
			templateUrl: viewBase + 'ordenes/ordenes.html'
		})
		.otherwise({redirectTo: '/personales'});
});

	