'use strict';

angular.module('jv.card', ['ngRoute'])

.directive('card', function () {
    return {
        restrict: 'E',
        replace: 'true',
        scope: {
            verb: '=',
            result: '=',
            onAction: '&'
        },
        templateUrl: 'components/card/card.html',
        controller: 'CardCtrl'
    };
})

.controller('CardCtrl', ['$scope', '$translate', 'Config', function ($scope, $translate, configService) {
    $scope.evaluateCardAction = function () {
        if (!$scope.result.show) {
            $scope.result.show = !$scope.result.show;
        } else {
            // call parent controller
            $scope.onAction();
        }
    }

    $scope.filterSolution = function (conjugation) {
        var result = false;
        var personKey = "PERSON." + conjugation.person; // hack, weil person enum ohne prefix PERSON. kommt, config service aber key immer PERSON. als prefix hat
        if (conjugation.tense.key == $scope.result.tense.key && personKey == $scope.result.person.key) {
            result = true;
        }
        return result;
    }
}]);
