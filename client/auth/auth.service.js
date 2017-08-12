/*
* Auth Service es el Service que gestiona el proceso de
* Longin de la aplicacion
*/



'use strict';

function AuthService($auth,$state){
  var Auth = {
    login: login
  };

  function login(user){
    $auth.login(user)
    .then(response => {
      $state.go("main");
      console.log("Login Realizado correctamente");
    })
    .catch(err => {
      $state.go("login");
      console.log("Error en el login");
    })
  }

  return Auth;
}//Final Function AuthService

angular.module("videoClubApp")
.factory("AuthService",AuthService);
