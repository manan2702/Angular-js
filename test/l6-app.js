(function (){
  'use strict';

  angular.module('lac-6', [])
  .controller("myController", function ($scope) {
    $scope.name = "";
    $scope.totalvalue = 0;

    $scope.displayNumeric = function (){
      var totalNameValue = calculateNumericForString($scope.name);
      $scope.totalvalue = totalNameValue;
    };

    function calculateNumericForString(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    };

  });
})();
