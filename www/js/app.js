// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var myApp = angular.module('starter', ['ionic', 'starter.controllers','firebase','myServices'])

.run(function($ionicPlatform, $rootScope,$ionicPlatform,AuthService, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
    $rootScope.$on('$stateChangeStart', 
				   function(event, toState, toParams, fromState, fromParams, options){ 

		console.log("$stateChangeStart");
		console.log("toState: " + toState.name);
		console.log("authRequired: " + toState.authRequired);
		console.log("authData: " + AuthService.getAuthData());

		//		if(toState.name !== 'starter' &&  toState.name !== 'signup' && toState.name !== 'login' && AuthService.getAuthData() === null)  {
		//			console.log("no auth data");
		//			event.preventDefault(); 
		//			if(toState.name === 'signup'){
		//				$state.go('signup');
		//			}
		//			else if(toState.name === 'login'){
		//				$state.go('login');
		//			}
		//			else {
		//				$state.go('starter');
		//			} 
		//		}

		if (toState.authRequired && AuthService.getAuthData() === null){ //Assuming the AuthService holds authentication logic
			// User isn’t authenticated
			$state.transitionTo("login");
			event.preventDefault(); 
		}
	})
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    // setup an abstract state for the tabs directive
		.state('starter', {
		url: '/starter', 
		templateUrl: 'templates/starter/starter.html',
		controller : 'MainCtrl'
	})

	// signup state
		.state('signup', {
		url: '/signup', 
		templateUrl: 'templates/signup/signup.html',
		controller : 'SignupCtrl'
	})

	// signup state
		.state('login', {
		url: '/login', 
		templateUrl: 'templates/login/login.html',
		controller : 'LoginCtrl'
	})
// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/starter');
  });
