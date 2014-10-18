'use strict';

angular.module('productsystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('detail', {
        url: '/products/:id',
        templateUrl: 'app/products/detail/detail.html',
        controller: 'DetailCtrl'
      });
  });