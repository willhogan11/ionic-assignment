// app.js file that contains details on declared state
angular.module('ionic-assignment', ['ionic', 'ionic-assignment.controllers'])


.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
      		cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})


.config(function($stateProvider, $urlRouterProvider) 
{
	// Declaration & Definition of States
	
	// Defaults to this State, 'menuState' should more be added 
	$urlRouterProvider.otherwise('/listState');
	
	$stateProvider
	
	/* Creates a Single State that hold the location url, the associated HTML
	template and it's associated controller bound in with the index.html page */
	.state('listState', 
	{
		url: '/listState',
		templateUrl: 'listState.html',
		controller: 'mainController'
	});
})
// End .config(function($stateProvider, $urlRouterProvider) 

