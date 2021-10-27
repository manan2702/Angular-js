(function() { 

    angular.module('Module1' , [])
    .controller('countController' , countController);

    countController.$inject = ['$scope'];

    function countController($scope) {
        $scope.input = "";

        $scope.Check = function () {
            var count = $scope.input.split(",");
            $scope.message;

            if($scope.input == " " || $scope.input == "" || $scope.input == null){
                $scope.message = "Please enter data first!!";
            }
            else if(count.length > 0 && count.length < 4) {
                $scope.message = "Enjoy!";
            }
            else if(count.length >= 4){
                $scope.message = "Too much!";
            }
        }
    }
})();