'use strict';

/* Services */

var photosServices = angular.module('photosServices', ['ngResource']);

photosServices.factory('Photo', ['$resource',
  function($resource){
    return $resource('photos/:photoId.json', {}, {
      query: {method:'GET', params:{photoId:'photos'}, isArray:true}
    });
  }]);
