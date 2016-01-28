(function () {
    'use strict';

    var module = angular.module('app', [
        'ngAnimate',
        'ngMessages',
        'ui.router',
        'ui.router.default',
        'app.common.directives',
        'app.organisation'
    ]);

   module.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/App/templates/home.html',
                controller: 'homeController'
            })
            .state('abstract', {
                url: '/abstract',
                templateUrl: '/App/templates/abstract.html',
                abstract: '.child1',
                controller: 'abstractController',
                resolve: {
                    abstractResolve: function () { return 'abstractResolve'; }
                
                }
            })
            .state('abstract.child1', {
                url: '/child1',
                templateUrl: '/App/templates/child1.html'
            });

        //$urlRouterProvider.otherwise('/');



    });

    module.controller('abstractController', function($scope, $state,abstractResolve) {

        $scope.workflow = {
            steps: [
                { name: 'step1', stateName: 'step one' },
                { name: 'step2', stateName: 'step twp' },
                { name: 'step3', stateName: 'step three' }
            ]
        }

        $scope.formModel = {
            name: 'james',
            resolved: abstractResolve
        };
        
    });

    module.run(function ($rootScope, $state) {
        $state.go('home');

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
            //console.log('$stateChangeError - fired when an error occurs during transition.');
            //notify.error('Error during transition:' + fromState.name + '->' + toState.name, event.name);
            console.group(event.name);
            console.log('Event:', event);
            console.log('ToState:', toState);
            console.log('ToParams:', toParams);
            console.log('fromState:', fromState);
            console.log('fromParams:', fromParams);
            console.log('Arguments:', arguments);
            console.groupEnd();
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            //console.log('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.');
            //notify.info('State tranistion:' + fromState.name + ' -> ' + toState.name + ' complete', event.name);
            console.group(event.name);
            console.log('Event:', event);
            console.log('ToParams:', toParams);
            console.log('fromParams:', fromParams);
            console.groupEnd();
        });

        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
            //console.log('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
            //console.log(unfoundState, fromState, fromParams);
            //notify.error('State not found:' + fromState.name + ' -> ' + unfoundState.to, event.name);
            console.group(event.name);
            console.log('Event:', event);
            console.log('UnfoundState:', unfoundState);
            console.log('fromState:', fromState);
            console.log('fromParams:', fromParams);
            console.groupEnd();
        });
    });

})();
