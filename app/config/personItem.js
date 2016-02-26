/*jslint white: true, sloppy: true*/

'use strict';

function PersonItemCtrl($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.update = function (value, active) {
        console.log('Update on item: ' + value);
        ctrl.onUpdate({
            id: value
        });
    };
}

angular.module('jv.config').component('personItem', {
    templateUrl: 'config/personItem.html',
    controller: PersonItemCtrl,
    bindings: {
        value: '<',
        hint: '<',
        active: '<',
        onUpdate: '&'
    }
});