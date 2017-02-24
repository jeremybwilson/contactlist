'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'firebase',
  'myApp.contacts'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

$routeProvider
  .when('/', 
  {
    controller: 'ContactsCtrl',
    templateUrl: '/contacts/contacts.html'
  })
  //Define a route that has a route parameter in it (:customerID)
  .otherwise({redirectTo: '/'});
}]);
