'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(usuariosService, ciudadesService, departamentosService, tiposDocumentosService) {
    this.usuariosService = usuariosService;
    this.ciudadesService = ciudadesService;
    this.departamentosService = departamentosService;
    this.tiposDocumentosService = tiposDocumentosService;
  }

  $onInit(){
		this.departamentosService.query().$promise
		.then(response => {
			this.departamentos = response;
		})
    .catch(err => console.error(err));
    
    this.tiposDocumentosService.query().$promise
		.then(response => {
			this.tiposDocumentos = response;
		})
		.catch(err => console.error(err));
	}

	getCiudades(){
		this.ciudadesService.getCiudades({idDepartamento:this.idDepartamento}).$promise
		.then(response => {
			this.ciudades = response;
			console.log("Ciudades",this.ciudades);
		})
		.catch(err => console.error(err));
	}

  createUser(){
  	this.usuariosService.save(this.usuario).$promise
  	.then(response => {
  		console.log("Usuario registrado correctamente ",response);
  	})
  	.catch(err=>{
  		console.log("Error al crear el usuario ",err);
  	})
  }
}
UsuariosCreateComponent.$inject = ['usuariosService','ciudadesService','departamentosService', 'tiposDocumentosService'];
angular.module('videoClubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
