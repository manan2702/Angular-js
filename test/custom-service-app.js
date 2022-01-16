(function () {
    'use strict';

    angular.module('myApp', [])
    .controller('ShoopingListAddController',ShoopingListAddController)
    .controller('ShoopingListShowController',ShoopingListShowController)
    .service('ShoppingListService', ShoppingListService);

    ShoopingListAddController.$inject = ['ShoppingListService'];
    function ShoopingListAddController(ShoppingListService) {
        var itemAdder = this;

        itemAdder.itemName;
        itemAdder.itemQuantity;

        itemAdder.addItem = function () {
            ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);  
        };
    }

    ShoopingListShowController.$inject = ['ShoppingListService'];
    function ShoopingListShowController(ShoppingListService) {
        var showList = this;

        showList.items = ShoppingListService.getItems();

        showList.removeItem = function (itemIndex) {
            alert(itemIndex);
            ShoppingListService.removeItem(itemIndex);
        };
    }

    function ShoppingListService() {
        var service = this;

        var items = [];

        service.addItem = function (itemName, quantity) {
            var item = {
                name : itemName,
                quantity : quantity
            };
            items.push(item);
        }

        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
        }

        service.getItems = function () {
            return items;
        };
    }
})();