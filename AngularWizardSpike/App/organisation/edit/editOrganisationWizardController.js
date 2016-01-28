(function () {
    'use strict';

    angular.module('app.organisation')
        .controller('editOrganisationWizardController', function ($scope, modelData) {
            $scope.workflow = {
                name:'Edit Organisation',
                steps: [],
                modelData: {}
            }
        });
})();