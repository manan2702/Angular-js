(function () {
    
    angular.module('myapp', [])
    .controller('digestController', digestController);
    digestController.$inject = ["$scope"];

    function digestController($scope) {
        $scope.name = "Faizal";
        $scope.onceCounter = 0;
        $scope.counter = 0;

        $scope.showNumberOfWatchers = function () {
            console.log("# of watchers :", $scope.$$watchersCount)
        };
        $scope.countOnce = function () {
            $scope.onceCounter = 1;
        };
        $scope.upCounter = function () {
            $scope.counter++;   
        };

        $scope.$watch(function () {
            console.log("Digest loop Fired !");
        })
        // $scope.$watch('onceCounter' , function (newValue , oldVAlue) {
        //     console.log('onceCounter oldValue', oldVAlue);
        //     console.log('onceCounter newValue', newValue);
        // });

        // $scope.$watch('counter' , function (newValue , oldVAlue) {
        //     console.log('counter oldValue', oldVAlue);
        //     console.log('counter newValue', newValue);
        // });
    };
})();