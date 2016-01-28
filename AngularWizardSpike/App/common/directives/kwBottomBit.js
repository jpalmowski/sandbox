(function () {
    'use strict';

    angular
        .module('app.common.directives')
        .directive('kwBottomBit', kwBottomBit);

    function kwBottomBit($parse) {
        var directive = {
            link: link,
            transclude: true,
            controller: ctrl,
            scope: {
                itemTypeName: '@',
                destinationCollection: '='
            },
            restrict: 'EA',
            templateUrl: '/App/common/directives/kwBottomBit.tpl.html'
        };
          
        return directive;

        function ctrl($scope) {
            //$scope.create = function () {
            //    var newPerson =  angular.copy($scope.$$childHead[$scope.itemTypeName]);
            //    $scope.destinationCollection.push(newPerson);
            //    $scope.$$childHead[$scope.itemTypeName] = {};
            //}
        }

        function link(scope, element, attrs, ctrl, transcludeFn) {
            console.log('ggg');
            //check that itemTypeName is set
            //check that destination collection is array-like

            //transcludeFn(scope, function (clone, scope) {
            //    angular.element(element[0].querySelector('[ng-transclude]')).append(clone);
            //});
        }
    }

})();
