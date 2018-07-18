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
      controller.getGroceries();
    }, function(){
      console.log("error");
    });
  }; // end of create item function

  this.getGroceries = function(){
    $http({
      method: "GET",
      url: "/groceries"
    }).then(function(response){
      controller.groceries = response.data
    }, function(){
      console.log("error");
    });
  }; // end of get groceries function

  this.getGroceries();

}]);
