(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyCtrl = this;

    toBuyCtrl.statusMessage = "Everything is bought!";
    toBuyCtrl.items = ShoppingListCheckOffService.getBuyItems();
    toBuyCtrl.checkOffItem = function(itemIndex){
      ShoppingListCheckOffService.checkOffItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtCtrl = this;

    boughtCtrl.statusMessage = "Nothing bought yet.";
    boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService(){
    var service = this;

    //List of items to buy
    var buyItems = [
      {name: "Bottlers of Milk", quantity: 2},
      {name: "Bar of Bread", quantity: 1},
      {name: "Bags of Beans", quantity: 4},
      {name: "Packages of Cheese", quantity: 3},
      {name: "Apples", quantity: 7}
    ];

    //List of bought items
    var boughtItems = [];

    service.getBuyItems = function (){
      return buyItems;
    };

    service.getBoughtItems = function(){
      return boughtItems;
    }

    service.checkOffItem = function(itemIndex){
      boughtItems.push(buyItems[itemIndex]);
      buyItems.splice(itemIndex, 1);
    }
  }

})();
