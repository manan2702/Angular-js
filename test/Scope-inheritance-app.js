(function () {
    'use strict';

    angular.module('myApp', [])
    .controller('scopeController',scopeController);

    scopeController.$INJECT = ['$scope'];

    function scopeController($scope) {

    }
})();