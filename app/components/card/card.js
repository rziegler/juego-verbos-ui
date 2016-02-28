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
        if (conjugation.tense.key == $scope.result.tense.key && conjugation.person == $scope.result.person.key) {
            result = true;
        }
        return result;
    }

//    var translate = function (translationPrefix) {
           //        console.log('using prefix ' + translationPrefix);
           //        if (typeof $scope.result !== 'undefined') {
           //            var key = translationPrefix + $scope.result.tense.key;
           //            $translate(key).then(function (translatedKey) {
           //                $scope.result.tense.translated = translatedKey;
           //            });
           //        }
           //    };
           //
           //    var translateTense = function () {
           //        translate('TENSE.');
           //    };
           //
           //    var translatePerson = function () {
           //        translate('PERSON.');
           //    }
           //
           //    $scope.$watch(function (scope) {
           //        return scope.result;
           //    }, translateTense);
}]);
