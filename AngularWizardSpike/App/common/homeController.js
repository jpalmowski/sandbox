(function() {
    'use strict';

    angular.module('app')
        .controller('homeController', function ($scope) {

            $scope.people = [];
            
            $scope.clickMe = function () {
                console.log('click');
            }

            $scope.validatePerson = function(person) {
                console.log(person);
            }

            $scope.validatePerson = function (person) {
                console.log(person);
            }


        });

})();