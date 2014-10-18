'use strict';

angular.module('productsystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/products.html',
        controller: 'ProductsCtrl',
        resolve: {
          products: function(Products) {
            return Products.query().$promise
              .then(function(data){
                return data;
              });
          }
        }
      });
  });