angular.module('ionic-assignment', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) 
{
	// Declaration & Definition of States
	$urlRouterProvider.otherwise('/');
	$stateProvider

	.state('menuState', 
	{
	  url: '/',
	  templateUrl: 'menuState.html'
	})

	.state('listState', 
	{
	  url: '/listState',
	  templateUrl: 'listState.html'
	})
	
	.state('summaryState',
	{
		url: '/summaryState',
		templateUrl: 'summaryState.html'
	});
	
}) // End of Declaration & Definition of States



.controller("CountCtrl", function($scope) 
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
	$scope.countTotalCals = 0;
})


		
.controller('MyCtrl', function($scope) 
{
  
  $scope.data = 
  {
    showDelete: false
  };
  
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  
  $scope.items = 
  [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 }
  ];
})



function getVal()
{
	var val, text;
	val = document.getElementById("num").value;
	// document.getElementById("result").innerHTML = text;
	document.write("\nThe Calorie total is: " + val);
}
