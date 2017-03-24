(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.foodList = "";
  $scope.statusMessage = "";
  $scope.customStyle = "";

  $scope.checkIfTooMuchFood = function(){
    var separator = ',';
    var stringToSplit = $scope.foodList;

    if ($scope.foodList == ""){
      $scope.statusMessage = "Please enter data first";
      $scope.customStyle = "Empty";
    } else if (countNumberOfFoods(stringToSplit, separator) <= 3){
      $scope.statusMessage = "Enjoy!";
      $scope.customStyle = "NoEmpty";
    } else {
      $scope.statusMessage = "Too much!";
      $scope.customStyle = "NoEmpty";
    }
  }

  function countNumberOfFoods(stringToSplit, separator){
    var totalNumberOfFoods = stringToSplit.split(separator).length;
    return totalNumberOfFoods;
  }
}

})();
