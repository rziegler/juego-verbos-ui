var verbServices = angular.module('verbServices', ['ngResource']);

verbServices.factory('Verbs', ['$resource', 'envService',
  function ($resource, envService) {
        var apiUrl = envService.read('apiUrl');
        console.log("Using " + apiUrl);
        return $resource(apiUrl + '/api/verbs/:verbId', {}, {
            query: {
                method: 'GET',
                params: {
                    verbId: 'random'
                },
                isArray: false
            }
        });
  }]);