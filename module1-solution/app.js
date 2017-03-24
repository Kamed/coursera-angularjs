(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.foodList = "";
  $scope.statusMessage = "";

  $scope.checkIfTooMuchFood = function(){
    var separator = ',';
    var stringToSplit = $scope.foodList;

    if ($scope.foodList == ""){
      $scope.statusMessage = "Please enter data first";
    } else if (countNumberOfFoods(stringToSplit, separator) <= 3){
      $scope.statusMessage = "Enjoy!";
    } else {
      $scope.statusMessage = "Too much!";
    }
  }

  function countNumberOfFoods(stringToSplit, separator){
    var totalNumberOfFoods = stringToSplit.split(separator).length;
    console.log(totalNumberOfFoods);
    return totalNumberOfFoods;
  }
}

})();
