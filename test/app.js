(function () {
  'use strict';

  angular.module('myFirstApp', [])
  .controller('MyFirstController', function ($scope) {
      $scope.number = 50;

      $scope.sayHello = function () {
        return "hello courera :)";
      }
      $scope.name = prompt("Enter your name : ");
  });
})();
