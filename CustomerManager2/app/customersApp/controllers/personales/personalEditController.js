app.controller('PersonalEditController', function($scope, $routeParams, personalesServicio, modalService){

	var personalID = ($routeParams.personalID) ? parseInt($routeParams.personalID) : 0;
	$scope.nuevoPersonal = {};
	$scope.botonTexto = (personalID > 0) ? 'Actualizar Personal' : 'Insertar Personal';
	
	init();

	function init(){
		if(personalID > 0){
			$scope.nuevoPersonal = personalesServicio.getPersonal(personalID);
		}
	}

	$scope.guardarCambios = function(){
		if($scope.editForm.$valid){
			if(!$scope.nuevoPersonal.id){
				$scope.insertarPersonal();	
			} else {
				$scope.actualizarPersonal();
			}
			
		}		
	}

	$scope.actualizarPersonal = function(){
		var id = $scope.nuevoPersonal.id;
		var nombre = $scope.nuevoPersonal.nombre;
		var apellido = $scope.nuevoPersonal.apellido;
		var ciudad = $scope.nuevoPersonal.ciudad;

		personalesServicio.actualizarPersonal(id, nombre, apellido, ciudad);
		
	};

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
		var nombrePersonal = $scope.nuevoPersonal.nombre + ' ' + $scope.nuevoPersonal.apellido;
		var modalOptions = {
			closeButtonText: 'Cancelar',
			actionButtonText: 'Borrar Personal',
			headerText: 'Borrar ' + nombrePersonal + '?',
			bodyText: 'Esta seguro de que quiere borrar este personal?'
		};

		modalService.showModal({}, modalOptions).then(function(resultado){
			if(resultado === 'ok'){
				personalesServicio.borrarPersonal(id);
				$scope.nuevoPersonal.nombre = '';
				$scope.nuevoPersonal.apellido = '';
				$scope.nuevoPersonal.ciudad = '';		
			}
		});
	}

});