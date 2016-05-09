var myCtlr = angular.module('starter.controllers', []);



/*
  ============================================================
  id: Main Controller
  ============================================================
*/  

myCtlr.controller('MainCtrl', function($scope,AuthService) {

	$scope.auth = AuthService;   


});

myCtlr.controller('AuthCtrl', function($scope) { 

	$scope.$on('$viewContentLoaded', function(){

	});
});

