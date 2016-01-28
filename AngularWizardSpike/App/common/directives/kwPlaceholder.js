(function () {
    'use strict';

    angular
        .module('app.common.directives')
        .directive('kwPlaceholder', kwPlaceholder);

    function kwPlaceholder($parse) {
        var directive = {
            link: link,
            scope: {
                ngRequired: '=',
                ngModel: '=',
                name: '@',
                ngClick: '&',
                displayExpression:'@',
                placeholderText:'@'
            },
            restrict: 'EA',
            templateUrl: '/App/common/directives/kwPlaceholder.html'
        };

        return directive;

        function link(scope, element, attrs) {
            var displayValue = scope.displayExpression;
            if (!angular.isDefined(displayValue)) {
                displayValue = scope.ngModel;
            }

            scope.displayValue = displayValue;

            //scope.displayValue = ngModel;
            //console.log(attrs.exp);
            //var model = $parse(attrs.exp);
            //console.log(scope);
            //console.log(scope.ngModel);

            //// "model" is now a function which can be invoked to get the expression's value;
            //// the following line logs the value of obj.name on scope:

            //console.log(model(scope.ngModel));
        }


    }

})();

