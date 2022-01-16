(function () {
    'use strict';

    var shoppingList1 = [
        "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol",
        "Pepto Bismol (chocolate flavor)", "Pepto Bismol (cookie flavor)"
    ];
    var contactNumber = [
        9898620701, 9913595202, 9986547123, 1212145678, 1235658974, 4598621456, 
        7896532145, 3264897512, 3265987451, 1245698456, 1245698753, 3215484165
    ];
    

    angular.module('myApp', []).controller('repeatController', repeatController);
    repeatController.$inject = ['$scope'];

    function repeatController($scope) {
        $scope.shoppingList1 = shoppingList1;
        $scope.contactNumber = contactNumber;
    };
})();