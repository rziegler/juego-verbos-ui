/*jslint white: true, sloppy: true*/

'use strict';

angular.module('jv.about', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'about/about.html',
        controller: 'AboutCtrl'
    });
    }])

.controller('AboutCtrl', ['$scope', '$translate', function ($scope, $translate) {

}]);
