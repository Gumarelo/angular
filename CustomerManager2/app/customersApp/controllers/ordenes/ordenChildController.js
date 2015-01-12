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