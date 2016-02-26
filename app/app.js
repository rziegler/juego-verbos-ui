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
                HINT: 'Click to show solution',
            },
            //            TENSE {
            PRESENT: 'Present',
            PRESENT_PERFECT: 'Present Perfect',
            PRETERITE: 'Preterite',
            FUTURE: 'Future',
            IMPERFECT: 'Imperfect',
            CONDITIONAL: 'Conditional',
            FUTURE_PERFECT: 'Future Perfect',
            PAST_PERFECT: 'Past Perfect',
            PRETERITE_ARCHAIC: 'Preterite (Archaic)',
            CONDITIONAL_PERFECT: 'Conditional Perfect',
            GERUNDIO: 'Gerund',
            PASTPARTICIPLE: 'Pastparticiple'
                //            }
        })
        .translations('de', {
            PLAY: {
                NEXT: 'Nächstes Verb',
                REPLAY: 'Dasselbe nochmals',
                HINT: 'Klicken um die Lösung anzuzeigen'
            },
            //            TENSE: {
            PRESENT: 'Präsens',
            PRESENT_PERFECT: 'Perfekt',
            PRETERITE: 'Präteritum',
            FUTURE: 'Futur',
            IMPERFECT: 'Imperfekt',
            CONDITIONAL: 'Konditional',
            FUTURE_PERFECT: '',
            PAST_PERFECT: 'Präteritum Perfekt',
            PRETERITE_ARCHAIC: '',
            CONDITIONAL_PERFECT: '',
            GERUNDIO: 'Gerundiv',
            PASTPARTICIPLE: 'Pastpartizip'
                //            }
        })
        .translations('es', {
            PLAY: {
                NEXT: 'Proximo verbo',
                REPLAY: 'Cortar otra vez',
                HINT: 'Clicar para presentar la solución',
            },
            //            TENSE: {
            PRESENT: 'Presente',
            PRESENT_PERFECT: 'Préterito perfecto',
            PRETERITE: 'Pretérito Indefinido',
            FUTURE: 'Futuro',
            IMPERFECT: 'Pretérito Imperfecto',
            CONDITIONAL: 'Condicional',
            FUTURE_PERFECT: 'Futuro perfecto',
            PAST_PERFECT: 'Pluscuamperfecto',
            PRETERITE_ARCHAIC: 'Pretérito anterior',
            CONDITIONAL_PERFECT: 'Condicional perfecto',
            GERUNDIO: 'Gerundio',
            PASTPARTICIPLE: 'Participio'
                //            }
        });

    $translateProvider
        .preferredLanguage('en')
        .useSanitizeValueStrategy('escape')
        .fallbackLanguage('en');
}])