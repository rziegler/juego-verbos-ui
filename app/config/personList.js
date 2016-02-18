/*jslint white: true, sloppy: true*/

'use strict';


var PersonListCtrl = function PersonListCtrl($scope, $element, $attrs, configService) {
    var ctrl = this;

    ctrl.updatePerson = function (id) {
        console.log('Update on person list: ' + id);
        configService.changePersonActive(id);
    };
}
PersonListCtrl.$inject = ['$scope', '$element', '$attrs', 'Config'];

angular.module('jv.config').component('personList', {
    templateUrl: 'config/personList.html',
    controller: PersonListCtrl,
    bindings: {
        values: '<',
        title: '<'
    }
});