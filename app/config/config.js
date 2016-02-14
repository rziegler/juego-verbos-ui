/*jslint white: true, sloppy: true*/

'use strict';

angular.module('jv.config', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/config', {
        templateUrl: 'config/config.html',
        controller: 'ConfigCtrl'
    });
    }])

.controller('ConfigCtrl', ['$scope', function ($scope) {
    console.log("Config controller I am");
}]);