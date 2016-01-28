(function () {
    'use strict';

    angular
        .module('app.common.directives')
        .directive('kwBottomBit', kwBottomBit);

    function kwBottomBit($parse) {
        var directive = {
            link: link,
            transclude: true,
            //require:'^kwCollectionEditor',
            controller: ctrl,
            scope: {
                min: '@',
                max:'@',
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

        function link(scope, elem, attrs, ctrl, transcludeFn) {



            console.log('ggg');


            transcludeFn(function (clone) {
                angular.forEach(clone, function (cloneEl) {
                    var destinationId = cloneEl.attributes["transclude-to"].value;
                    var destination = elem.find('[transclude-id="' + destinationId + '"]');
                    if (destination.length) {
                        destination.append(cloneEl);
                    } else {
                        cloneEl.remove();
                    }
                });
            });


            ////var times = parseInt(attrs.duplicate, 10);
            //var times = 3;
            //var previous = element;
            //var childScope;

            ////get content of the display-view
            ////get content of the edit-view

            
            //for (var i = 0; i < times; i += 1) {
            //    childScope = scope.$new();
            //    childScope.$index = i;
            //    childScope[scope.itemTypeName] = scope.destinationCollection[i] || {};

            //    transcludeFn(childScope, function (clone) {
            //        previous.after(clone);
            //        previous = clone;
            //    });
            //}

            ////check that itemTypeName is set
            ////check that destination collection is array-like

            ////transcludeFn(scope, function (clone, scope) {
            ////    angular.element(element[0].querySelector('[ng-transclude]')).append(clone);
            ////});
        }
    }

})();
