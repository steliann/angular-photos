'use strict';

/* Controllers */

var photosControllers = angular.module('photosControllers', []);

photosControllers.controller('PhotoListCtrl', ['$scope', 'Photo',
  function($scope, Photo) {
    $scope.photos = Photo.query();
    $scope.orderProp = 'age';
  }]);

photosControllers.controller('PhotoDetailCtrl', ['$scope', '$routeParams', 'Photo',
  function($scope, $routeParams, Photo) {
    $scope.photo = Photo.get({photoId: $routeParams.photoId}, function(photo) {
      $scope.mainImageUrl = photo.imageUrl;
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
