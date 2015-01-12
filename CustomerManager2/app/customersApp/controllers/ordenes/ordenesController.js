//Este controlador recupera datos de personalesServicio y asocia con el $scope
//El $scope esta ligado a la vista del personal
app.controller('OrdenesController', function($scope, personalesServicio){
	$scope.personales = [];

	//Para los controladores que necesitan realizar alguna inicializacion
	//algunas veces es recomendable utilizar init()
	//Mantiene las cosas es un solo lugar... no es necesario
	//especialmente en este ejemplo sencillo
	init();

	function init(){
		$scope.personales = personalesServicio.getPersonales();
	}
});

app.controller('NavbarController', function($scope, $location){
	$scope.getClass = function(path){
		if($location.path().substr(0, path.length) == path){
			return true;
		} else {
			return false;
		}
	}
});