'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'verbServices',
    'jv.play',
    'jv.card',
    'myApp.version'
])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/play'
    });
}])