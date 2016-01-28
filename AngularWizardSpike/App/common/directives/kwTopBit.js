(function () {
    'use strict';

    angular
        .module('app.common.directives')
        .directive('kwTopBit', kwTopBit);

    function kwTopBit($parse) {
        var directive = {
            link: link,
            transclude: true,
            require:'^kwCollectionEditor',
            controller: ctrl,
            //scope: {
            //    //itemTypeName: '@',
            //    //destinationCollection: '='
            //},
            restrict: 'EA',
            templateUrl: '/App/common/directives/kwTopBit.tpl.html'
        };
          
        return directive;

        function ctrl($scope) {
            $scope.addItem = function (sdsd) {

                //var newPerson =  angular.copy($scope.$$childHead[$scope.itemTypeName]);
                //$scope.destinationCollection.push(newPerson);
                //$scope.$$childHead[$scope.itemTypeName] = {};
            }
        }

        function link(scope, element, attrs, ctrl, transcludeFn) {
            scope.addItem = function(form) {
                console.log(form);
            };

            scope.create = function() {
                var locScope = scope;
                console.log('bob');
                ctrl.createInCol('ddwedcv');
                //var newPerson =  angular.copy($scope.$$childHead[$scope.itemTypeName]);
                //$scope.destinationCollection.push(newPerson);
                //$scope.$$childHead[$scope.itemTypeName] = {};
            };

            //console.log(ctrl);
            //ctrl.create('fffff');
            //check that itemTypeName is set
            //check that destination collection is array-like

            //transcludeFn(scope, function (clone, scope) {
            //    angular.element(element[0].querySelector('[ng-transclude]')).append(clone);
            //});
        }
    }

})();
