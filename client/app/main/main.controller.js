'use strict';

(function() {

    class MainController {

        constructor() {
            this.estilos = [
                'nuevo',
                'usado',
                'usadoN'
            ];
            this.palabra = "hola";
            this.palabraFinal = ["h", "o", "l", "a"];
            this.palabraDigitada = "";
            this.intentos = 6;
            this.gano = "";
        }

        ponerColor() {
            this.hola = parseInt(Math.random() * 3);
        }

        ahorcado() {
            for (var i = 0; i <= this.palabraDigitada.length; i++) {
                if (this.palabraFinal[i] == palabraDigitada) {
                    this.palabraDigitada += this.gano;
                } else {
                    this.gano = "_";
                }
            }
        }
    }

    angular.module('videoClubApp')
        .component('main', {
            templateUrl: 'app/main/main.html',
            controller: MainController,
            controllerAs: 'vm'
        });
})();