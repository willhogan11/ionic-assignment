angular.module('ionic-assignment', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) 
{
	// Declaration & Definition of States
	
	// Defaults to this State, the 'menuState'
	$urlRouterProvider.otherwise('/listState');
	
	$stateProvider
	
	.state('listState', 
	{
		url: '/listState',
		templateUrl: 'listState.html',
		controller: 'mainController'
	});
	
}) // End of Declaration & Definition of States


.controller('mainController', function($scope) 
{
    $scope.firstName= "";
    $scope.lastName= "";
	$scope.cals = 0;
	$scope.dayOfWeek = 
	[
		{Id: "Mon", Name: "Mon"}, 
		{Id: "Tue", Name: "Tue"}, 
		{Id: "Wed", Name: "Wed"}, 
		{Id: "Thu", Name: "Thu"}, 
		{Id: "Fri", Name: "Fri"}, 
		{Id: "Sat", Name: "Sat"}, 
		{Id: "Sun", Name: "Sun"}, 
	];
	
    $scope.items = 
	[
		{ Id: "Male", Name: "Male" },
		{ Id: "Female", Name: "Female" }
	];
		if($scope.items.Id == "Male"){
			$scope.cals = 3500;
		}else{
			$scope.cals = 2500;
		}
})

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