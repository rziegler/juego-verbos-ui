/*jslint white: true, sloppy: true*/

'use strict';

angular.module('jv.play', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/play', {
        templateUrl: 'play/play.html',
        controller: 'PlayCtrl'
    });
    }])

.controller('PlayCtrl', ['$scope', 'Verbs', function ($scope, Verbs) {
    $scope.verb = Verbs.query();
}])