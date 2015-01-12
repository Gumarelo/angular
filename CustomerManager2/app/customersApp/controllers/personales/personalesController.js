//Este controlador recupera datos de personalesServicio y asocia con el $scope
//El $scope esta ligado a la vista del personal
app.controller('PersonalesController', function($scope, personalesServicio){

	//Para los controladores que necesitan realizar alguna inicializacion
	//algunas veces es recomendable utilizar init()
	//Mantiene las cosas es un solo lugar... no es necesario
	//especialmente en este ejemplo sencillo
	init();

	function init(){
		$scope.personales = personalesServicio.getPersonales();
	}

	$scope.insertarPersonal = function(){
		var nombre = $scope.nuevoPersonal.nombre;
		var apellido = $scope.nuevoPersonal.apellido;
		var ciudad = $scope.nuevoPersonal.ciudad;

		personalesServicio.insertarPersonal(nombre, apellido, ciudad);
		$scope.nuevoPersonal.nombre = '';
		$scope.nuevoPersonal.apellido = '';
		$scope.nuevoPersonal.ciudad = '';
	};

	$scope.borrarPersonal = function(id){
		personalesServicio.borrarPersonal(id);
	}

});