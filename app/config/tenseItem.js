/*jslint white: true, sloppy: true*/

'use strict';


function TenseItemCtrl($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.update = function (value, active) {
        console.log('Update on item: ' + value);
        ctrl.onUpdate({
            id: value
        });
    };
}

angular.module('jv.config')
    .component('tenseItem', {
        templateUrl: 'config/tenseItem.html',
        controller: TenseItemCtrl,
        bindings: {
            value: '<',
            active: '<',
            visible: '<',
            onUpdate: '&'
        }
    });
