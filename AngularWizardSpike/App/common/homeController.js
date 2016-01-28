(function() {
    'use strict';

    angular.module('app')
        .controller('homeController', function ($scope) {

            $scope.people = [];
            
            $scope.clickMe = function () {
                console.log('click');
            }

        });

})();