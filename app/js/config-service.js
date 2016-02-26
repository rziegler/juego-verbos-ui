'use strict';

var configService = angular.module('configService', ['ngResource']);

configService.factory('Config', ['$resource', '$translate', 'envService',
  function ($resource, $translate, envService) {
        var apiUrl = envService.read('apiUrl');
        var Tenses = $resource(apiUrl + '/api/tenses', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });

        var tenses = Tenses.query();
        tenses.$promise.then(function (response) {
            console.log('tenses loaded');
            tenses = response;
        }).catch(function () {
            console.log('error fetching tenses');
        })

        var persons = [
            {
                key: "FIRST_SINGULAR",
                name: "PERSON.FIRST_SINGULAR",
                hint: "PERSON_HINT.FIRST_SINGULAR",
                active: true
            },
            {
                key: "FIRST_PLURAL",
                name: "PERSON.FIRST_PLURAL",
                hint: "PERSON_HINT.FIRST_PLURAL",
                active: true
            },
            {
                key: "SECOND_SINGULAR",
                name: "PERSON.SECOND_SINGULAR",
                hint: "PERSON_HINT.SECOND_SINGULAR",
                active: true
            },
            {
                key: "SECOND_PLURAL",
                name: "PERSON.SECOND_PLURAL",
                hint: "PERSON_HINT.SECOND_PLURAL",
                active: true
            },
            {
                key: "THIRD_SINGULAR",
                name: "PERSON.THIRD_SINGULAR",
                hint: "PERSON_HINT.THIRD_SINGULAR",
                active: true
            },
            {
                key: "THIRD_PLURAL",
                name: "PERSON.THIRD_PLURAL",
                hint: "PERSON_HINT.THIRD_PLURAL",
                active: true
            }
      ];
        var actions = new Enum({
            'NONE': {
                text: 'None (flip card)'
            },
            'REPLAY': {
                text: 'Replay same verb'
            },
            'NEXT': {
                text: 'Next verb'
            }
        });
        var currentAction = actions.NONE;

        var languages = new Enum({
            'EN': {
                text: 'English'
            },
            'DE': {
                text: 'Deutsch'
            },
            'ES': {
                text: 'Español'
            }
        });

        var getAllTenses = function () {
            return tenses;
        };

        var getActiveTenses = function () {
            var result = [];

            tenses.forEach(function (entry) {
                if (entry.active) {
                    result.push(entry);
                }
            });
            return result;
        };

        var changeTenseActive = function (id) {
            tenses.forEach(function (element) {
                if (element.name === id) {
                    element.active = !element.active;
                    console.log('Change active flag for ' + element.name + '(' + element.active + ')');
                }
            });
        };

        var getAllPersons = function () {
            return persons;
        };

        var getActivePersons = function () {
            var result = [];
            persons.forEach(function (entry) {
                if (entry.active) {
                    result.push(entry);
                }
            });
            return result;
        };

        var changePersonActive = function (id) {
            persons.forEach(function (element) {
                if (element.name === id) {
                    element.active = !element.active;
                    console.log('Change active flag for ' + element.name + '(' + element.active + ')');
                }
            });
        };

        var getAllLanguages = function () {
            return languages;
        }

        var getLanguage = function () {
            return $translate.use().toUpperCase();
        };

        var setLanguage = function (lang) {
            var lowerLang = lang.toLowerCase();
            console.log('Changing lang to ' + lowerLang);
            $translate.use(lowerLang);
        };

        var getAllActions = function () {
            return actions;
        };

        var getAction = function () {
            return currentAction.key;
        };

        var setAction = function (a) {
            currentAction = actions.get(a);
        }

        return {
            getActiveTenses: getActiveTenses,
            getAllTenses: getAllTenses,
            changeTenseActive: changeTenseActive,
            getAllPersons: getAllPersons,
            getActivePersons: getActivePersons,
            changePersonActive: changePersonActive,
            getAllLanguages: getAllLanguages,
            getLanguage: getLanguage,
            setLanguage: setLanguage,
            getAllActions: getAllActions,
            getAction: getAction,
            setAction: setAction
        }
}]);