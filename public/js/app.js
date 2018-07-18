const app = angular.module("groceriesApp", []);

app.controller("GroceryController", ["$http", function($http){
  const controller = this;

  this.createGroceryItem = function(){
    $http({
      method: "POST",
      url: "/groceries",
      data: {
        name: this.name,
        quantity: this.quantity,
        purchased: this.purchased
      }
    }).then(function(response){
      console.log(response);
    });
  }; // end of create item 


}]);
