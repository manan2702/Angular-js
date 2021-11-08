(function() {
    'use strict';

    var shoppingList1 = [
        "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol",
        "Pepto Bismol (chocolate flavor)", "Pepto Bismol (cookie flavor)"
    ];
    var shoppingList2 = [
        {
            name : "Milk",
            quantity : "2"
        },
        {
            name : "Donuts",
            quantity : "200"
        },
        {
            name : "Cookies",
            quantity : "300"
        },
        {
            name : "Chocolate",
            quantity : "20"
        },
        {
            name : "Peanut Butter",
            quantity : "1"
        }
    ];
    angular.module('myApp', [])
    .controller('repeatController', repeatController);
    repeatController.$inject = ['$scope'];

    function repeatController($scope) {
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;

        $scope.addToList = function () {
          var newItem = {
            name : $scope.newItemName,
            quantity : $scope.newItemQuantity
          };  

          $scope.shoppingList2.push(newItem);
        };
    }

})();