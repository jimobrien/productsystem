'use strict';

angular.module('productsystemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/products/create',
        templateUrl: 'app/products/create/create.html',
        authenticate: true,
        controller: 'CreateCtrl'
      });
  });