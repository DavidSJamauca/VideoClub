'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;
  }

  createUser(){
  	this.usuariosService.createEmpleados(this.usuario).$promise
  	.then(response => {
  		console.log("Usuario registrado correctamente ",response);
  	})
  	.catch(err=>{
  		console.log("Error al crear el usuario ",err);
  	})
  }
}
UsuariosCreateComponent.$inject = ['usuariosService'];
angular.module('videoClubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
