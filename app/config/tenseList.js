/*jslint white: true, sloppy: true*/

'use strict';


var TenseListCtrl = function TenseListCtrl($scope, $element, $attrs, configService) {
    var ctrl = this;

    ctrl.updateTense = function (id) {
        console.log('Update on tense list: ' + id);
        configService.changeTenseActive(id);
    };
}
TenseListCtrl.$inject = ['$scope', '$element', '$attrs', 'Config'];

angular.module('jv.config').component('tenseList', {
    templateUrl: 'config/tenseList.html',
    controller: TenseListCtrl,
    bindings: {
        values: '<',
        title: '<'
    }
});