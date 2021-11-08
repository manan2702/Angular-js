(function () {
    angular.module('myFilter', [])
    .controller("filterController" , filterController)
    .filter("love", newFilter);

    filterController.$inject = ['$scope' , 'loveFilter'];

    function filterController($scope, loveFilter) {
            $scope.input = '';
            var msg = input; 
            loveFilter(msg);
            
    };

    function newFilter() {
        return function (msg) {
            msg = msg.$filter('uppercase')
            return msg;
        };
    }
})();