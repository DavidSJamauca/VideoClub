'use strict';

(function() {

    class UsuariosCreateComponent {
        constructor(usuariosService, ciudadesService, departamentosService, tiposDocumentosService) {
            this.usuariosService = usuariosService;
            this.ciudadesService = ciudadesService;
            this.departamentosService = departamentosService;
            this.tiposDocumentosService = tiposDocumentosService;
            this.showValidarDocumento = false;
            this.showValidarEmail = false;
            this.usuario = {
                ciudad: {
                    id: null
                }
            }
        }

        $onInit() {
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

        getCiudades() {
            this.ciudadesService.getCiudades({ idDepartamento: this.idDepartamento }).$promise
                .then(response => {
                    this.ciudades = response;
                    console.log("Ciudades", this.ciudades);
                })
                .catch(err => console.error(err));
        }

        querySearch(searchText) {
            return this.ciudadesService.getCiudades({ nombre: this.searchText }).$promise
                .then(response => {
                    return response;
                })
                .catch(err => console.error(err));
        }

        selectedItemChange(item) {
            console.log("ITEM", item);
            if (item != undefined) {
                this.usuario.ciudad.id = item.id;
            }
        }

        createUser() {
            console.log("USUARIO", this.usuario);
            this.usuariosService.save(this.usuario).$promise
                .then(response => {
                    console.log("Usuario registrado correctamente ", response);
                })
                .catch(err => {
                    console.log("Error al crear el usuario ", err);
                })
        }
        validarNumDocumento() {
            this.usuariosService.query({ numDocumento: this.usuario.numDocumento }).$promise
                .then(response => {
                    if (response.length == 0 || this.usuario.numDocumento == undefined) {
                        console.log("Numero de documento correcto", response);
                        this.showValidarDocumento = false;
                    } else {
                        console.log("Numero de documento ya se encuentra registrado", response);
                        this.showValidarDocumento = true;
                    }
                })
                .catch(err => {
                    console.log("No existe", err);
                })
        }
        validarEmail() {
            this.usuariosService.query({ email: this.usuario.email }).$promise
                .then(response => {
                    if (response.length == 0 || this.usuario.email == undefined) {
                        console.log("Email correcto", response);
                        this.showValidarEmail = false;
                    } else {
                        console.log("Email ya se encuentra registrado", response);
                        this.showValidarEmail = true;
                    }
                })
                .catch(err => {
                    console.log("No existe", err);
                })
        }
    }
    UsuariosCreateComponent.$inject = ['usuariosService', 'ciudadesService', 'departamentosService', 'tiposDocumentosService'];
    angular.module('videoClubApp')
        .component('usuariosCreate', {
            templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
            controller: UsuariosCreateComponent,
            controllerAs: 'vm'
        });

})();