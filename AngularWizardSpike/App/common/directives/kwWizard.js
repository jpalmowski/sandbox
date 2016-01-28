(function() {
    'use strict';

    angular
        .module('app.common.directives')
        .directive('kwWizard', kwWizard);

    function kwWizard() {
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl:'/App/common/directives/kwWizard.html'
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

})();