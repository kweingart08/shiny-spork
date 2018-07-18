const app = angular.module("groceriesApp", []);

app.controller("GroceryController", ["$http", function($http){
  const controller = this;

  this.togglePurchased = (grocery) => {
    console.log(grocery);
    let newPurchased;
    if(grocery.purchased === true){
      grocery.purchased = false
    } else {
      grocery.purchased = true
    }
  }

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

  this.deleteGroceryItem = function(grocery){
    $http({
      method: "DELETE",
      url: "/groceries/" + grocery._id
    }).then(function(response){
      controller.getGroceries();
    });
  }; // end of delete function

  this.editGroceryItem = function(grocery){
    this.indexOfEditFormToShow = -1;
    $http({
      method: "PUT",
      url: "/groceries/" + grocery._id,
      data: {
        name: this.updatedName,
        quantity: this.updatedQuantity,
        purchased: this.updatedPurchased
      }
    }).then(function(response){
      controller.getGroceries();
    });
  };

  this.getGroceries();

}]);
