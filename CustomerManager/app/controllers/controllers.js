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

//Este controlador es un controlador hijo el cual heredara funcionalidades
//de un padre
//Este controlador sera usado para hacer el tracking de los parametros
//orderBy y ordersTotal para un personal.
//Es mejor ponerlo aqui en vez de duplicar setOrder y orderBy a traves
//de multiples controladores
app.controller('OrdenChildController', function($scope){
	$scope.orderby = 'producto';
	$scope.reverse = false;
	$scope.ordenesTotales = 0.00;

	init();

	function init(){
		//Calcula el total
		//Manejado a este nivel asi no duplicamos lo mismo en 
		//los controladores padres
		if($scope.personal && $scope.personal.ordenes){
			var total = 0.00;
			for(var i  = 0; i < $scope.personal.ordenes.length; i++){
				var orden = $scope.personal.ordenes[i];
				total += orden.ordenTotal;
			}

			$scope.ordenesTotales = total;
		}
	}

	$scope.setOrden = function(orderby){
		if(orderby === $scope.orderby){
			$scope.reverse = !$scope.reverse;
		}

		$scope.orderby = orderby;
	};
});