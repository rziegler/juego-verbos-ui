'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'verbServices',
    'myApp.view1',
    'myApp.view2',
    'jv.play',
    'myApp.version'
]).

config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/view1'
    });
}]);