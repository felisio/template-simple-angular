'use strict';

angular.module('myApp.agenda', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/agenda', {
    templateUrl: 'agenda/agenda.html',
    controller: 'AgendaCtrl'
  });
}])

.controller('AgendaCtrl', [function() {

}]);