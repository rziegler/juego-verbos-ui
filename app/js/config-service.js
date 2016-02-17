var configService = angular.module('configService', ['ngResource']);

configService.factory('Config', ['$resource',
  function ($resource) {
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
        }

        return {
            getActiveTenses: getActiveTenses,
            getAllTenses: getAllTenses,
            changeTenseActive: changeTenseActive
        }
}]);