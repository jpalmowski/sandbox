(function() {
    'use strict';

    angular
        .module('app.organisation')
        .directive('editOrganisationStep1', editOrganisationStep1);

    function editOrganisationStep1 ($scope) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();