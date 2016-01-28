(function() {
    'use strict';

    var module = angular.module('app.organisation.create');

    module.config(function($stateProvider, $urlRouterProvider) {
       
        $stateProvider
            .state('create-organisation', {
                abstract: '.step1',
                url: '/organisation/create',
                template:'<kw-wizard></kw-wizard>',
                controller: 'createOrganisationWizardController',
                resolve: {
                    organisation: function() {
                        return { organisationId: 1 };
                    },
                    modelData: function(organisation) {
                        return {
                            organisation: organisation
                        };
                    }
                },
            })
            .state('create-organisation.step1', {
                url: '',
                views: {
                    '': { templateUrl: '/App/organisation/create/createOrganisationWizardStep1.html' },
                    //'': { template: '<kw-organisation-page-one></kw...>},
                    //'actions': { template: 'STEP 1 Navigation' }
                }
            })
            .state('create-organisation.step2', {
                templateUrl: '/App/organisation/create/createOrganisationWizardStep2.html',
            })
            .state('create-organisation.step3', {
                templateUrl: '/App/organisation/create/createOrganisationWizardStep3.html',
            })
            .state('create-organisation.step4', {
                templateUrl: '/App/organisation/create/createOrganisationWizardStep4.html',
            });

        $urlRouterProvider.when('/organisation/create/*path', 'organisation/create');

    });

})();