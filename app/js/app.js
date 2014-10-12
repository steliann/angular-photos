'use strict';

/* App Module */

var photosApp = angular.module('photosApp', [
  'ngRoute',
  'photosAnimations',

  'photosControllers',
  'photosFilters',
  'photosServices'
]);

photosApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/photos', {
        templateUrl: 'partials/photo-list.html',
        controller: 'PhotoListCtrl'
      }).
      when('/photo/:photoId', {
        templateUrl: 'partials/photo-detail.html',
        controller: 'PhotoDetailCtrl'
      }).
      otherwise({
        redirectTo: '/photos'
      });
  }]);
