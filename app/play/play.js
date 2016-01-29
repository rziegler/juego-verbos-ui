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

    $scope.config = {
        allowedTenses: {
            1: {
                key: "PRESENT",
                name: "Presente"
            },
            2: {
                key: "PRESENT_PERFECT",
                name: "Perfect"
            },
            3: {
                key: "PRETERITE",
                name: "Preterito (Indefinido)"
            },
            4: {
                key: "FUTURE",
                name: "Futuro"
            }
        },
        allowedPersons: {
            1: {
                key: "FIRST_SINGULAR",
                name: "1st singular"
            },
            2: {
                key: "SECOND_SINGULAR",
                name: "2nd singular"
            },
            3: {
                key: "THIRD_SINGULAR",
                name: "3rd singular"
            },
            4: {
                key: "FIRST_PLURAL",
                name: "1st plural"
            },
            5: {
                key: "SECOND_PLURAL",
                name: "2nd plural"
            },
            6: {
                key: "THIRD_PLURAL",
                name: "3rd plural"
            }
        }
    };

    $scope.result = {
        show: false,
        tense: randomTense($scope.config),
        person: randomPerson($scope.config)
    };
    $scope.verb = Verbs.query();
}]);

function randomTense(config) {
    var id = Math.floor((Math.random() * Object.keys(config.allowedTenses).length) + 1);
    var tense = config.allowedTenses[id];
    return tense;
}

function randomPerson(config) {
    var id = Math.floor((Math.random() * Object.keys(config.allowedPersons).length) + 1);
    var person = config.allowedPersons[id];
    return person;
}