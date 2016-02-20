'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'environment',
    'pascalprecht.translate',
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
            },
            production: {
                apiUrl: 'http://ruth.threeit.ch',
            }
        }
    });
    envServiceProvider.check();
})

.config(['$translateProvider', function ($translateProvider) {
    $translateProvider
        .translations('en', {
            PLAY: {
                NEXT: 'Next verb',
                REPLAY: 'Replay',
                HINT: 'Click to show solution'
            }
        })
        .translations('de', {
            PLAY: {
                NEXT: 'Nächstes Verb',
                REPLAY: 'Dasselbe nochmals',
                HINT: 'Klicken um die Lösung anzuzeigen'
            }
        })
        .translations('es', {
            PLAY: {
                NEXT: 'Proximo verbo',
                REPLAY: 'Cortar otra vez',
                HINT: 'Clicar para presentar la solución'
            }
        });

    $translateProvider
        .preferredLanguage('en')
        .useSanitizeValueStrategy('escape')
        .fallbackLanguage('en');
}])