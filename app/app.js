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
    'jv.about',
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
            PERSON: {
                FIRST_SINGULAR: '1st singlar',
                FIRST_PLURAL: '1st plural',
                SECOND_SINGULAR: '2nd singular',
                SECOND_PLURAL: '2nd plural',
                THIRD_SINGULAR: '3rd singular',
                THIRD_PLURAL: '3rd plural'
            },
            PERSON_HINT: {
                FIRST_SINGULAR: 'i',
                FIRST_PLURAL: 'we',
                SECOND_SINGULAR: 'you',
                SECOND_PLURAL: 'you',
                THIRD_SINGULAR: 'he/she',
                THIRD_PLURAL: 'they'
            },
            TENSE: {
                PRESENT: 'present',
                PRESENT_PERFECT: 'present perfect',
                PRETERITE: 'preterite',
                FUTURE_SIMPLE: 'future simple',
                FUTURE: 'future',
                IMPERFECT: 'imperfect',
                CONDITIONAL: 'conditional',
                FUTURE_PERFECT: 'future perfect',
                PAST_PERFECT: 'past perfect',
                PRETERITE_ARCHAIC: 'preterite (archaic)',
                CONDITIONAL_PERFECT: 'conditional perfect',
                GERUNDIO: 'gerund',
                PASTPARTICIPLE: 'pastparticiple'
            }
        })
        .translations('de', {
            PLAY: {
                NEXT: 'Nächstes Verb',
                REPLAY: 'Dasselbe nochmals',
                HINT: 'Klicken um die Lösung anzuzeigen'
            },
            PERSON: {
                FIRST_SINGULAR: '1. Singular',
                FIRST_PLURAL: '1. Plural',
                SECOND_SINGULAR: '2. Singular',
                SECOND_PLURAL: '2. Plural',
                THIRD_SINGULAR: '3. Singular',
                THIRD_PLURAL: '3. Plural'
            },
            PERSON_HINT: {
                FIRST_SINGULAR: 'ich',
                FIRST_PLURAL: 'wir',
                SECOND_SINGULAR: 'du',
                SECOND_PLURAL: 'ihr',
                THIRD_SINGULAR: 'er/sie',
                THIRD_PLURAL: 'sie'
            },
            TENSE: {
                PRESENT: 'Präsens',
                PRESENT_PERFECT: 'Perfekt',
                PRETERITE: 'Präteritum',
                FUTURE: 'Futur',
                FUTURE_SIMPLE: 'Futur einfach',
                IMPERFECT: 'Imperfekt',
                CONDITIONAL: 'Konditional',
                //                FUTURE_PERFECT: '',
                PAST_PERFECT: 'Präteritum Perfekt',
                //                PRETERITE_ARCHAIC: '',
                //                CONDITIONAL_PERFECT: '',
                GERUNDIO: 'Gerundiv',
                PASTPARTICIPLE: 'Pastpartizip'
            }
        })
        .translations('es', {
            PLAY: {
                NEXT: 'Proximo verbo',
                REPLAY: 'Cortar otra vez',
                HINT: 'Clicar para presentar la solución',
            },
            PERSON: {
                FIRST_SINGULAR: '1° singlar',
                FIRST_PLURAL: '1° plural',
                SECOND_SINGULAR: '2° singular',
                SECOND_PLURAL: '2° plural',
                THIRD_SINGULAR: '3° singular',
                THIRD_PLURAL: '3° plural'
            },
            PERSON_HINT: {
                FIRST_SINGULAR: 'yo',
                FIRST_PLURAL: 'nosotros',
                SECOND_SINGULAR: 'tú',
                SECOND_PLURAL: 'vosotros',
                THIRD_SINGULAR: 'él/ella',
                THIRD_PLURAL: 'ellos/ellas'
            },
            TENSE: {
                PRESENT: 'presente',
                PRESENT_PERFECT: 'préterito perfecto',
                PRETERITE: 'pretérito Indefinido',
                FUTURE: 'futuro',
                FUTURE_SIMPLE: 'futuro simple',
                IMPERFECT: 'pretérito imperfecto',
                CONDITIONAL: 'condicional',
                FUTURE_PERFECT: 'futuro perfecto',
                PAST_PERFECT: 'pluscuamperfecto',
                PRETERITE_ARCHAIC: 'pretérito anterior',
                CONDITIONAL_PERFECT: 'condicional perfecto',
                GERUNDIO: 'gerundio',
                PASTPARTICIPLE: 'participio'
            }
        });

    $translateProvider
        .preferredLanguage('en')
        .useSanitizeValueStrategy('escape')
        .fallbackLanguage('en');
}])
