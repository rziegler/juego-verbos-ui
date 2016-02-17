'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'environment',
    'verbServices',
    'configService',
    'jv.play',
    'jv.home',
    'jv.config',
    'jv.card',
    'myApp.version'
])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}])

.config(function (envServiceProvider) {

    // set the domains and variables for each environment 
    envServiceProvider.config({
        domains: {
            development: ['localhost', 'dev.local'],
            production: ['ruth.threeit.ch']
        },
        vars: {
            development: {
                apiUrl: 'http://localhost:8080',
                //                    staticUrl: '//localhost/static'
            },
            production: {
                apiUrl: 'http://ruth.threeit.ch',
                //                    staticUrl: '//static.acme.com'
            }
        }
    });

    envServiceProvider.check();

})