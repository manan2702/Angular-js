(function () {
    'use strict';

    angular.module('myApp' , [])
    .controller('bindingController', bindingController);

    bindingController.$inject = ['$scope'];

    function bindingController($scope) {
      $scope.firstname = "Faizal";
    //   $scope.fullname = "";
      
      $scope.showNumberOfWatchers = function () {
          console.log("# of Watchers  : ", $scope.$$watchersCount);
      };

      $scope.setFullName = function () {
          $scope.fullname = $scope.firstname + " " + "Kadiwal";
      };

      $scope.logFirstName = function () {
          console.log("First name is : ", $scope.firstname);
      };

      $scope.logFullName = function () {
        console.log("Full name is : ", $scope.fullname);
    };
    };
})();