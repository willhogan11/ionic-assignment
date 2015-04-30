angular.module('ionic-assignment.controllers', [])

/* Main Controller:
This Controller is Bound only with the Header part 'Enter Details' section of the App. 
It Holds the scope for items (gender) and the Days of the week (dayOfWeek) 
 */
.controller('mainController', function($scope) 
{
    $scope.firstName= ""; // Set to empty string as user will enter their name
    $scope.lastName= ""; // Set to empty string as user will enter their name
	$scope.cals = 0;
	
	// Uses Id & Name to bind the data inside the scope to the HTML page
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
	
	// Same As above
    $scope.items = 
	[
		{ Id: "Male", Name: "Male" },
		{ Id: "Female", Name: "Female" }
	];
	
	// Calorie Calculation condition for Male & Female. 
	if($scope.items.Id == "Male"){
		$scope.cals = 3500;
	}else{
		$scope.cals = 2500;
	}

	// This was how i was going to implement the local Storage
	
	// $scope.$on("$ionicView.afterEnter", function()
	// {
		// if($localstorage.getObject('user') != null)
		// {
			// $scope.user = $localstorage.getObject('user');
		// }
		// else
		// { 
			// $localstorage.setObject('user', $scope.user);
		// }
		
}) 
// End .controller('mainController', function($scope)


/* countCtrl:
Global Controller with all the food count scopes
The value is altered each time a user clicks the plus or minus values
Again bound with the HTML page.*/
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
	$scope.countWhiteBread = 0; 
	$scope.countBrownBread = 0; 
	$scope.countBacon = 0;
}) 
// End .controller("countCtrl", function($scope) 
