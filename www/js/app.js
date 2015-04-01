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
	});
	
}) // End of Declaration & Definition of States



.controller("CountCtrl", function($scope) 
{
	$scope.countMeat = 0;
	$scope.countFish = 0;
	$scope.countFruitAndVeg = 0;
	$scope.countPoultry = 0;
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
