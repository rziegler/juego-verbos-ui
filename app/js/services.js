var verbServices = angular.module('verbServices', ['ngResource']);

verbServices.factory('Verbs', ['$resource',
  function ($resource) {
        return $resource('http://localhost:8080/verbs/:verbId', {}, {
            query: {
                method: 'GET',
                params: {
                    verbId: 'nadar'
                },
                isArray: false
            }
        });
  }]);