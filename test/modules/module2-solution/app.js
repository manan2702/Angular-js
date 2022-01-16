(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.provider('ShoppingListService', ShoppingListServiceProvider)
.config(Config);

Config.$inject = ['ShoppingListServiceProvider'];
function Config(ShoppingListServiceProvider) {
  // Save Yaakov from himself
  ShoppingListServiceProvider.defaults.maxItems = 5;
}


ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var list = this;

  list.items = ShoppingListService.getItems();

  list.itemName = "";
  list.itemQuantity = "";
  list.itemslen =
  list.addItem = function () {
    try {
      ShoppingListService.addItem(list.itemName, list.itemQuantity);
    } catch (error) {
      list.errorMessage = error.message;
    }
  };

  list.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var boughtlist = this;

  boughtlist.items = ShoppingListService.getboughtItems();

  boughtlist.itemName = "";
  boughtlist.itemQuantity = "";
}

// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];
  var alreadyboughtitem = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);

    }
    else {
      throw new Error("ERROR: Max items (" + maxItems + ") reached.");
    }
  };
  service.removeItem = function (itemIndex) {
      alreadyboughtitem.push(items[itemIndex]);
      items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
  service.getboughtItems = function () {
    return alreadyboughtitem;
  };
}


function ShoppingListServiceProvider() {
  var provider = this;

  provider.defaults = {
    maxItems: 10
  };

  provider.$get = function () {
    var shoppingList = new ShoppingListService(provider.defaults.maxItems);

    return shoppingList;
  };
}

})();
