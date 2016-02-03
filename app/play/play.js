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
                name: "presente"
            },
            2: {
                key: "PRESENT_PERFECT",
                name: "perfect"
            },
            3: {
                key: "PRETERITE",
                name: "preterito (indefinido)"
                    //            },
                    //            4: {
                    //                key: "FUTURE",
                    //                name: "futuro"
            }
        },
        allowedPersons: {
            1: {
                key: "FIRST_SINGULAR",
                name: "1st singular",
                hint: "yo"
            },
            2: {
                key: "SECOND_SINGULAR",
                name: "2nd singular",
                hint: "tú"
            },
            3: {
                key: "THIRD_SINGULAR",
                name: "3rd singular",
                hint: "él/ella"
            },
            4: {
                key: "FIRST_PLURAL",
                name: "1st plural",
                hint: "nosotros"
            },
            5: {
                key: "SECOND_PLURAL",
                name: "2nd plural",
                hint: "vosotros"
            },
            6: {
                key: "THIRD_PLURAL",
                name: "3rd plural",
                hint: "ellos/ellas"
            }
        }
    };

    $scope.result = {
        show: false,
        translation: false,
        tense: randomTense($scope.config),
        person: randomPerson($scope.config)
    };

    $scope.nextVerb = function () {
        $scope.result.show = false;
        $scope.result.tense = randomTense($scope.config);
        $scope.result.person = randomPerson($scope.config);
        $scope.verb = Verbs.query();
    };

    $scope.replayVerb = function () {
        $scope.result.show = false;
        $scope.result.tense = randomTense($scope.config);
        $scope.result.person = randomPerson($scope.config);
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