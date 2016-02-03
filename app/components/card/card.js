'use strict';

angular.module('jv.card', ['ngRoute'])

.directive('card', function () {
    return {
        restrict: 'AE',
        replace: 'true',
        scope: {
            verb: '=',
            result: '='
        },
        templateUrl: 'components/card/card.html'
    };
})