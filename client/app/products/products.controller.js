'use strict';

angular.module('productsystemApp')
  .controller('ProductsCtrl', function ($scope, $state, products, Products) {
    $scope.products = products;

    $scope.add = function() {
      $state.go('create');
    };

    $scope.viewProduct = function () {
      $state.go('product')
    };

    $scope.delete = function(index) {
      Products.delete({id: $scope.products[index]._id}).$promise
        .then(function(res){
          $scope.products.splice(index, 1);
        });
    };
  });
