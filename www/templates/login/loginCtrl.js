myCtlr.controller(
	'LoginCtrl', 

	function($scope,AuthService,$state) {
 
		$scope.auth = AuthService;


		$scope.logInData = {
		};


		$scope.logIn = function() { 
			AuthService.showLoader();
			console.log("login function called");
			AuthService.logIn($scope.logInData,function(err,res){
				console.log("err: " + err);
				console.log("res: " + res);
				
				if(!err){
					AuthService.setUserProfile(function(){
						$state.transitionTo('dashboard',{location:"replace"});
						AuthService.hideLoader();
					}) 
				}
				else{
					AuthService.hideLoader();
				}
			}); 
		};  



	} 
)
