'use strict';

angular.module('productsystemApp')
  .factory('Products', function ($resource) {
    return $resource('/api/products/:id');
  });
