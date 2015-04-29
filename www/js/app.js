angular.module('ionic-assignment', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) 
{
	// Declaration & Definition of States
	
	// Defaults to this State, the 'menuState'
	$urlRouterProvider.otherwise('/menuState');
	
	$stateProvider

	// menuState
	.state('menuState', 
	{
		url: '/menuState',
		templateUrl: 'menuState.html',
		controller: 'userDetails'
	})
	// End menuState

	.state('listState', 
	{
		url: '/listState',
		// parent: 'menuState',
		templateUrl: 'listState.html'
	})
	
	.state('summaryState',
	{
		url: '/summaryState',
		// parent: 'menuState',
		templateUrl: 'summaryState.html'
	});
	
	// $urlRouterProvider.otherwise('/menuState');
	
}) // End of Declaration & Definition of States


.controller('userDetails', function($scope) 
{
    $scope.firstName= "";
    $scope.lastName= "";
    $scope.items = 
	[
		{ Id: "Male", Name: "Male" },
		{ Id: "Female", Name: "Female" }
	];
})

// .controller('userDetails', function ($scope) 
// {
	// $scope.items = $scope.items
		// {Name : ""};
// })


.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) 
  {
	  $rootScope.$state = $state;
	  $rootScope.$stateParams = $stateParams;
  }
])

.controller("countCtrl", function($scope) 
{
	$scope.countCod = 0;
	$scope.countSalmon = 0;
	$scope.countPlaice = 0
	$scope.countSausages = 0;
	$scope.countSteak = 0;
	$scope.countLamb = 0;
	$scope.countApple = 0;
	$scope.countOrange = 0;
	$scope.countBanana = 0;
	$scope.countCarrot = 0;
	$scope.countParsnip = 0;
	$scope.countCelery = 0;
	$scope.countLamb = 0;
	$scope.countSteak = 0;
	$scope.countSausages = 0; 
	$scope.countApple = 0; 
	$scope.countOrange = 0; 
	$scope.countBanana = 0; 
	$scope.countCarrot = 0; 
	$scope.countParsnip = 0; 
	$scope.countCelery = 0; 
	$scope.countChicken = 0; 
	$scope.countDuck = 0; 
	$scope.countTurkey = 0; 
	$scope.countBrownRice = 0; 
	$scope.countWhiteRice = 0; 
	$scope.countWhitePasta = 0; 
	$scope.countBrownPasta = 0; 
	$scope.countPotatoes = 0; 
})


function getVal()
{
	var val, text;
	val = document.getElementById("num").value;
	// document.getElementById("result").innerHTML = text;
	document.write("\nThe Calorie total is: " + val);
}