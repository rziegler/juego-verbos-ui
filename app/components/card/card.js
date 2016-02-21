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

.controller('CardCtrl', ['$scope', 'Config', function ($scope, configService) {

    $scope.evaluateCardAction = function () {
        if (!$scope.result.show) {
            $scope.result.show = !$scope.result.show;
        } else {
            // call parent controller
            $scope.onAction();
        }
    }
}]);