/*
 * Auth Service es el Service que gestiona el proceso de
 * Longin de la aplicacion
 */
'use strict';

function AuthService($auth, $state, localStorageService) {
    var Auth = {
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated,
        isAdmin: isAdmin,
        isUser: isUser,
        getRoles: getRoles,
        getIdUser: getIdUser
    };

    function login(user) {
        $auth.login(user)
            .then(response => {
                $state.go("main");
                localStorageService.set('idUsuarioLogueado', Auth.getIdUser());
                console.log("Login Realizado correctamente");
            })
            .catch(err => {
                $state.go("login");
                console.log("Error en el login");
            })
    }

    function logout() {
        if (Auth.isAuthenticated()) {
            $auth.logout()
                .then(response => {
                    $state.go("main");
                    console.log("Salida OK");
                })
        }
    }

    function isAuthenticated() {
        if ($auth.isAuthenticated()) {
            return true;
        } else {
            return false;
        }
    }

    function getRoles() {
        if (Auth.isAuthenticated()) {
            return $auth.getPayload().roles
        } else {
            return false;
        }
    }

    function isAdmin() {
        if (Auth.isAuthenticated()) {
            if ($auth.getPayload().roles.indexOf("ADMIN") !== -1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    function isUser() {
        if (Auth.isAuthenticated()) {
            console.log($auth.getPayload().roles);
            if ($auth.getPayload().roles.indexOf("USER") !== -1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    function getIdUser() {
        if (Auth.isAuthenticated()) {
            return $auth.getPayload().sub
        } else {
            return false;
        }
    }

    return Auth;
} //Final Function AuthService

angular.module("videoClubApp")
    .factory("AuthService", AuthService);