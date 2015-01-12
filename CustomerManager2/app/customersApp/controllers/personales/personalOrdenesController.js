//Este controlador recupera datos de personalesServicio y asocia con el $scope
//El $scope esta ligado a la vista del personal
app.controller('PersonalOrdenesController', function($scope, $routeParams, personalesServicio){
	$scope.personal = {};
	$scope.ordenesTotales = 0.00;

	//Para los controladores que necesitan realizar alguna inicializacion
	//algunas veces es recomendable utilizar init()
	//Mantiene las cosas es un solo lugar... no es necesario
	//especialmente en este ejemplo sencillo
	init();

	function init(){
		//Obtenemos el id del personal a partir de la ruta
		var personalID = ($routeParams.personalID) ? parseInt($routeParams.personalID) : 0;
		if(personalID > 0){
			$scope.personal = personalesServicio.getPersonal(personalID);
		}		
	}

});