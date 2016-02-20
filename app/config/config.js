/*jslint white: true, sloppy: true*/

'use strict';

angular.module('jv.config', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/config', {
        templateUrl: 'config/config.html',
        controller: 'ConfigCtrl'
    });
    }])

.controller('ConfigCtrl', ['$scope', '$translate', 'Config', function ($scope, $translate, configService) {
    var ctrl = this;
    $scope.allTenses = configService.getAllTenses();
    $scope.allPersons = configService.getAllPersons();

    $scope.language = $translate.use();

    $scope.changeLanguage = function () {
        configService.setLanguage($scope.language);
    }
}]);