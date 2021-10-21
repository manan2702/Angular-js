(function () {
  'use strict';

  angular.module('myFirstApp', [])
  .controller('MyFirstController', function ($scope) {
      $scope.number = 50;

      $scope.sayHello = function () {
        return "hii my  name is Faizal";
      }
      $scope.name = prompt("Enter your name : ");
  });
})();
