/*jslint white: true, sloppy: true*/

'use strict';

angular.module('jv.home', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
    }])

.controller('HomeCtrl', ['$scope', function ($scope) {
    console.log("Home controller I am");
}]);