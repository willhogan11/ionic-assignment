angular.module('"calorieManagementApp"', ['ionic'])

.run(function($ionicPlatform)
{
  $ionicPlatform.ready(function()
{
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// States Declaration
.config(function($stateProvider, $urlRouterProvider)
{
        $urlRouterProvider.otherwise('/');

        // List of States
        $stateProvider

        .state('menuState',
        {
          url: '/',
          templateUrl: 'menuState.html'
        })

        .state('nextState',
        {
          url: '/nextState',
		  templateUrl: 'nextState.html'
        });

}) // End of States Declaration


                                                                
