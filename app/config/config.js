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


    $scope.languageData = {
        selected: configService.getLanguage(),
        options: []
    };
    configService.getAllLanguages().enums.forEach(function (element) {
        $scope.languageData.options.push(element);
    });

    $scope.changeLanguage = function () {
        configService.setLanguage($scope.languageData.selected);
    }

    $scope.actionData = {
        selected: configService.getAction(),
        options: []
    };

    configService.getAllActions().enums.forEach(function (element) {
        $scope.actionData.options.push(element);
    });

    $scope.changeAction = function () {
        configService.setAction($scope.actionData.selected);
    }

}]);