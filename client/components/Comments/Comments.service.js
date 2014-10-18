'use strict';

angular.module('productsystemApp')
  .factory('Comments', function ($resource) {
    return $resource('/api/comments/:dest/:product_id', {}, {
      query: {method: 'GET', params: {dest: 'product'}, isArray: true}
    });
  });
