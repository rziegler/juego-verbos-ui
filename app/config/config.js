/*jslint white: true, sloppy: true*/

'use strict';

angular.module('jv.config', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/config', {
        templateUrl: 'config/config.html',
        controller: 'ConfigCtrl'
    });
    }])

.controller('ConfigCtrl', ['$scope', 'Config', function ($scope, configService) {
    var ctrl = this;
    $scope.allTenses = configService.getAllTenses();

    $scope.changeActiveTense = function (tense) {
        configService.setActive(tense);
    };

    var tenses = configService.getActiveTenses();
}]);