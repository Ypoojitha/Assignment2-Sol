(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.ToBuyItems = ShoppingListCheckOffService.getToBuyItems();

  showList.DoBuyItem = function (index) {
    ShoppingListCheckOffService.DoBuyItem(index);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

  showList.boughtItems = ShoppingListCheckOffService.getboughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  var ToBuyItems = [{name: "Cookies", quantity:10 },
  { name: "Cookies", quantity:10 },
{ name: "Cookies", quantity:10 },
{ name: "Cookies", quantity:10 },
{ name: "Cookies", quantity:10 }]
var boughtItems = [];

this.DoBuyItem = function (index) {
  boughtItems.push(ToBuyItems[index]);
  ToBuyItems.splice(index, 1);
}

this.getToBuyItems = function() {
  return ToBuyItems;
}

this.getboughtItems = function () {
  return boughtItems;
}
}
})();
