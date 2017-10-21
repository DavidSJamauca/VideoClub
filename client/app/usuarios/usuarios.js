'use strict';

angular.module('videoClubApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('usuarios-list', {
                url: '/usuarios-list',
                authenticate: true,
                template: '<usuarios-list></usuarios-list>'
            })
            .state('usuarios-create', {
                url: '/usuarios-create',
                authenticate: ['ADMIN', 'VENDEDOR'],
                template: '<usuarios-create></usuarios-create>'
            })
            .state('usuarios-update', {
                url: '/usuarios-update/:idUsuario',
                template: '<usuarios-update></usuarios-update>'
            });
    });