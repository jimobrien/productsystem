'use strict';

angular.module('productsystemApp')
  .controller('DetailCtrl', function ($scope, product) {
    $scope.product = product;

  });
