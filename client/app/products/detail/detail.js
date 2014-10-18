'use strict';

angular.module('productsystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('detail', {
        url: '/products/:id',
        templateUrl: 'app/products/detail/detail.html',
        controller: 'DetailCtrl',
        resolve: {
          // query product details
          product: function(Products, $stateParams) {
            return Products.get({id: $stateParams.id}).$promise
              .then(function(product){
                return product;
              })
          },
          // query product comments
          comments: function(Comments, $stateParams) {
            return Comments.query({product_id: $stateParams.id }).$promise
              .then(function(comments){
                return comments;
              });
          }
        }
      });
  });