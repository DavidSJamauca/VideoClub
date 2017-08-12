'use strict';

function usuariosService($resource,API){
	return $resource(API + '/api/usuarios/:id',{
		id:'@id'
	},{
		update:{
			method:'PUT'
		},
		createEmpleados:{
			url:API+'/api/usuarios/empleados',
			method:'POST'
		},
		createAdministrador:{
			url:API+'/api/usuarios/administradores',
			method:'POST'
		}
	});
}

usuariosService.$inject = ['$resource','API'];
angular.module('videoClubApp')
  .factory('usuariosService',usuariosService);
