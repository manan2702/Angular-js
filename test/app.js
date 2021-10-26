(function () {
  'use strict';

  // angular.module('myFirstApp', [])
  // .controller('MyFirstController', function ($scope) {
  //     // $scope.number = 50;

  //     // $scope.sayHello = function () {
  //     //   return "hii my  name is Faizal";
  //     // }
  //     // $scope.name = prompt("Enter your name : ");
  // });


  // DI Controller

  // angular.module('myFirstApp', [])
  // .controller('DIController', DIController);
  
  // function DIController($scope, $filter, $injector) {
  //   $scope.name = "Faizal";

  //   $scope.upper = function () {
  //     var upCase = $filter('uppercase');

  //     $scope.name = upCase($scope.name);
  //   }

  //   console.log($injector.annotate(DIController));
  // };

  // function remote(name , job, title) {
  //   return "hello world! how are you";
  // }

  // Protecting DI from minification
  // during minification injector like : scope,filter name aslo changed 
  // and if name chnage it not gona wrok 
  // To protect this injector we use array in controller 
  // in array we put all our injector in single-inverted coma ['$scope' , '$filter', ....]

  angular.module('myFirstApp', [])
  // .controller('DIController', ['$scope' , '$filter', DIController]);
  .controller('DIController', DIController);
  
  // instead of declare scope&filter in above mix with controller we can also do as below to seem clear or readability
  DIController.$inject = ['$scope' , '$filter'];

  function DIController($scope, $filter) {
    $scope.name = "Faizal";

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }
  };
  // Below code is minification code of upper code.
  // !function(){"use strict";function e(e,n){e.name="Faizal",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("myFirstApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
})();
