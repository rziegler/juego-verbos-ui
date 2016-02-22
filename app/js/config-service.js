'use strict';

var configService = angular.module('configService', ['ngResource']);

configService.factory('Config', ['$resource', '$translate',
  function ($resource, $translate) {
        var tenses = [
            {
                key: "PRESENT",
                name: "presente",
                active: true
            }, {
                key: "PRESENT_PERFECT",
                name: "perfect",
                active: true
            }, {
                key: "PRETERITE",
                name: "preterito (indefinido)",
                active: true
            }, {
                key: "FUTURO",
                name: "futuro",
                active: false
            }, {
                key: "GERUNDIO",
                name: "gerundio",
                active: false
            }
        ];
        var persons = [
            {
                key: "FIRST_SINGULAR",
                name: "1st singular",
                hint: "yo",
                active: true
            },
            {
                key: "FIRST_PLURAL",
                name: "1st plural",
                hint: "nosotros",
                active: true
            },
            {
                key: "SECOND_SINGULAR",
                name: "2nd singular",
                hint: "tú",
                active: true
            },
            {
                key: "SECOND_PLURAL",
                name: "2nd plural",
                hint: "vosotros",
                active: true
            },
            {
                key: "THIRD_SINGULAR",
                name: "3rd singular",
                hint: "él/ella",
                active: true
            },
            {
                key: "THIRD_PLURAL",
                name: "3rd plural",
                hint: "ellos/ellas",
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
            return $translate.use().toUpperCase;
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
            return currentAction;
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