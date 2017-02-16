'use strict';

angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope','$firebaseArray', function($scope, $firebaseArray) {
  // var ref = new Firebase('https://contactlist-835b5.firebaseio.com/');
  /* above is the old way of connecting, instead use config in index.html file */

  $scope.contacts = $firebaseArray(rootRef);

  $scope.addContact = function(){
    console.log('Adding contact...');

    $scope.contacts.$add({
      name: $scope.name,
      email: $scope.email,
      phone: $scope.phone
    }).then(function(rootRef){
      var id = rootRef.key();
      console.log('Added Contact ' +id);

      $scope.name = '';
      $scope.email = '';
      $scope.phone = '';
    });
  };

  $scope.removeContact = function(contact){
    $scope.contacts.$remove(contact)
  }

}]);