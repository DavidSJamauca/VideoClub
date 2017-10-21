'use strict';

angular.module('videoClubApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('perfil-update', {
                url: '/perfil-update',
                authenticate: true,
                template: '<perfil-update></perfil-update>'
            });
    });