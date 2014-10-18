'use strict';

angular.module('productsystemApp')
  .controller('CreateCtrl', function ($scope, $state, Products) {
    $scope.newProduct = {};

    $scope.cancel = function () {
      // return to products list
      $state.go('products');
    };

    $scope.create = function () {
      Products.save($scope.newProduct).$promise
        .then(function(){
          // return to products list
          $state.go('products');
        })
    };
  });
