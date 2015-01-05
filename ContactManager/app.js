var module = angular.module('app', []);

module.service('ContactService', function(){
	//to create unique contact id
	var uid = 1;

	//contacts array to hold list of all contacts
	var contactos = [{
		id: 0,
		'nombre': 'Jorge',
		'email': 'jorge@gmail.com',
		'telefono': '123-4567-89'
	}];

	//save method create a new contact if not already exists
	//else update the existing object
	this.guardar = function(contacto){
		if(contacto.id == null){
			//if this is a new contact, add it in contacts array
			contacto.id = uid++;
			contactos.push(contacto);
		} else {
			//for existing contact, find this contact using id
			//and update it.
			for(i in contactos){
				if(contactos[i].id == contacto.id){
					contactos[i] = contacto;
				}
			}
		}
	}

	//simply search contacts list for given id
	//and returns the contact object if found
	this.get = function(id){
		for(i in contactos){
			if(contactos[i].id == id){
				return contactos[i];
			}
		}
	}

	this.borrar = function(id){
		for(i in contactos){
			if(contactos[i].id == id){
				contactos.splice(i, 1);
			}
		}
	}

	this.list = function(){
		return contactos;
	}
});

module.controller('ContactController', function($scope, ContactService){
	$scope.contactos = ContactService.list();

	$scope.guardarContacto = function(){
		ContactService.guardar($scope.nuevoContacto);
		$scope.nuevoContacto = {};
	}

	$scope.borrar = function(id){
		ContactService.borrar(id);
		if($scope.nuevoContacto.id == id)
			$scope.nuevoContacto = {};
	}

	$scope.editar = function(id){
		$scope.nuevoContacto = angular.copy(ContactService.get(id));
	}
})