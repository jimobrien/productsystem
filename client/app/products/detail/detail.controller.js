'use strict';

angular.module('productsystemApp')
  .controller('DetailCtrl', function ($scope, product, comments, user, Comments) {
    $scope.product = product;
    $scope.comments = comments;

    $scope.newComment = {     
      user_name: user.name,
      product_id: $scope.product._id
    };
    
    $scope.addComment = function () {
      Comments.save($scope.newComment).$promise
        .then(function(res){
          console.log(res)
          // update collection in mem
          $scope.comments.push($scope.newComment);

          //reset comment
          $scope.newComment = {
            user_name: user.name,
            product_id: $scope.product._id
          }
        });
    };
  });
