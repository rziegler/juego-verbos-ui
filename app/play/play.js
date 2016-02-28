/*jslint white: true, sloppy: true*/

'use strict';

angular.module('jv.play', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/play', {
        templateUrl: 'play/play.html',
        controller: 'PlayCtrl'
    });
    }])

.controller('PlayCtrl', ['$scope', 'Verbs', 'Config', function ($scope, verbService, configService) {

    $scope.config = {};

    configService.getAllTenses().$promise.then(function (data) {
        $scope.config.allowedTenses = configService.getActiveTenses();
        $scope.config.allowedPersons = configService.getActivePersons();

        $scope.verb = verbService.query();
        $scope.result = {
            show: false,
            showTranslation: false,
            tense: randomTense($scope.config),
            person: randomPerson($scope.config)
        };
        console.log('loaded result' + $scope.result);
    })

    $scope.nextVerb = function () {
        $scope.config.allowedTenses = configService.getActiveTenses();
        $scope.config.allowedPersons = configService.getActivePersons();
        $scope.result.show = false;
        $scope.result.tense = randomTense($scope.config);
        $scope.result.person = randomPerson($scope.config);
        $scope.verb = verbService.query();
    };

    $scope.replayVerb = function () {
        $scope.config.allowedTenses = configService.getActiveTenses();
        $scope.config.allowedPersons = configService.getActivePersons();
        $scope.result.show = false;
        $scope.result.tense = randomTense($scope.config);
        $scope.result.person = randomPerson($scope.config);
    };

    $scope.onAction = function () {
        var action = configService.getAction();
        switch (action) {
        case 'NONE':
            $scope.result.show = !$scope.result.show;
            break;
        case 'REPLAY':
            $scope.replayVerb();
            break;
        case 'NEXT':
            $scope.nextVerb();
            break;
        };
    };
}]);

function randomTense(config) {
    var id = Math.floor((Math.random() * Object.keys(config.allowedTenses).length) + 1);
    var tense = config.allowedTenses[id - 1];
    return tense;
}

function randomPerson(config) {
    var id = Math.floor((Math.random() * Object.keys(config.allowedPersons).length) + 1);
    var person = config.allowedPersons[id - 1];
    return person;
}
