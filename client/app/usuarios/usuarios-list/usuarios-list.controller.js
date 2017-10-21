'use strict';

(function() {

    class UsuariosListComponent {
        constructor(usuariosService, NavegateParams, $state) {
            this.usuariosService = usuariosService;
            this.NavegateParams = NavegateParams;
            this.$state = $state;
        }

        cambiarStatus(item) {
            this.usuariosService.update(item).$promise
                .then(response => {
                    alert("Cambio el estado");
                })
                .catch(err => {
                    alert("No funciono");
                })
        }

        $onInit() {
            this.usuariosService.query().$promise
                .then(response => {
                    console.log("USUARIOS OK", response);
                    this.usuarios = response;
                })
                .catch(err => {
                    console.log("ERROR", err);
                });
        }

        goUpdateUser(idUser) {
            this.NavegateParams.setData('idUsuario', idUser);
            this.$state.go("usuarios-update");
        }
    }

    UsuariosListComponent.$inject = ['usuariosService', 'NavegateParams', '$state'];
    angular.module('videoClubApp')
        .component('usuariosList', {
            templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
            controller: UsuariosListComponent,
            controllerAs: 'vm'
        });

})();