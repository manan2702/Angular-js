(function() {
    
    angular.module('myApp', [])
    .controller('digestController', digestController);

    digestController.$inject = ["$scope" , "$timeout"];

    function digestController($scope, $timeout) {
        $scope.counter = 0;

        $scope.upCounter = function () {
            // ==========METHOD - 3============

            $timeout( function () {
                $scope.counter++;
                console.log("Counter INcremented!!");
            }, 2000);
            // USE ANGULAR SPECOFIC SERVICE $timeout

            // ==========METHOD - 2============

            // setTimeout( function () {

            //     $scope.$apply(function () {
            //         $scope.counter++;
            //         console.log("Counter INcremented!!");
            //     });
                    // WRAP-UP YOUR CUSTOM CODE IN $APPLY FUNCTION
            // }, 2000);


            // ==========METHOD - 1============

            // setTimeout( function () {
            //     $scope.counter++;   
            //     console.log("Counter Incremented!!");
            //     $scope.$digest();  // ADD $DIGEST AFTER CUSTOM CODE
            // }, 2000);



            /* Digest cycle doesnot get trigged automatically  
            if events are unaware of angular
            */
        }
    };
})();