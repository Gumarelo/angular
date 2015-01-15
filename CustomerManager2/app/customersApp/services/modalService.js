app.service('modalService', function($modal){

	var modalDefaults = {
		backdrop: true,
		keyboard: true,
		modalFade: true,
		templateUrl: '/angular/customermanager2/app/customersApp/partials/modal.html'
	};

	var modalOptions = {
		closeButtonText: 'Cerrar',
		actionButtonText: "Ok",
		headerText: 'Proceder?',
		bodyText: 'Realizar esta accion?'
	};

	//Sets the backdrop property to “static” so that it won’t go away when the user clicks on it 
	this.showModal = function(customModalDefaults, customModalOptions){
		if(!customModalDefaults)
			customModalDefaults = {};

		customModalDefaults.backdrop = 'static';

		return this.show(customModalDefaults, customModalOptions);
	};

	// It then calls show() which applies values that are supplied to the $modal service. 
	// The call to open() at the bottom of modalService handles displaying the modal dialog.
	this.show = function(customModalDefaults, customModalOptions){
		//Creamos un objeto temporal para trabajar ya que estamos en un servicio singleton
		var tempModalDefaults = {};
		var tempModalOptions = {};

		//Map angular-ui modal custom defaults to modal defaults defined in this service
        angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

        //Map modal.html $scope custom properties to defaults defined in this service
        angular.extend(tempModalOptions, modalOptions, customModalOptions);

        if(!tempModalDefaults.controller){
        	tempModalDefaults.controller = function($scope, $modalInstance){
        		$scope.modalOptions = tempModalOptions;
        		$scope.modalOptions.ok = function(resultado){
        			$modalInstance.close('ok');
        		};
        		$scope.modalOptions.close = function(resultado){
        			$modalInstance.close('cancelar');
        		};
        	};

        	tempModalDefaults.controller.$inject = ['$scope', '$modalInstance'];
        }

        return $modal.open(tempModalDefaults).result;
            
	};

});