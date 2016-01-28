(function () {
    'use strict';

    angular.module('app.organisation.create')
        .controller('createOrganisationWizardController', function ($scope, $state, $stateParams, modelData) {
            $scope.workflow = {
                name: 'Create Organisation',
                steps: [
                    {
                        name: 'Do Step 1',
                        states: [
                            { name: 'step1' }
                        ]
                    },
                    {
                        name: 'Do Step 2',
                        states: [
                            { name: 'step2' }
                        ]
                    }
                ],
                modelData: modelData,
                currentState: {}
            }

            function initialise() {
                
            }

            initialise();


            //$scope.processForm = function (wizardForm) {
            //    if ($scope.canGoForward() && wizardForm.$valid) {
            //        handleNext();
            //    }
            //}

            //$scope.canGoBack = function () {
            //    if ($state.current.name == 'create-organisation.step1') {
            //        return false;
            //    } else {
            //        return true;
            //    }
            //}

            //$scope.canGoForward = function () {
            //    if ($state.current.name == 'create-organisation.step3') {
            //        return false;
            //    } else {
            //        return true;
            //    }
            //}

            //$scope.executeAction = function (actionName) {
            //    console.log(actionName, $state.current.name);

            //    if (actionName == 'next') {
            //        handleNext($state.current);
            //    }

            //    else if (actionName == 'back') {
            //        handleBack($state.current);
            //    }

            //}

            //function handleNext() {
            //    //console.log('next', $state.current.name);
            //    if ($state.current.name == 'create-organisation.step1') {
            //        $state.go('create-organisation.step2');
            //    }

            //    else if ($state.current.name == 'create-organisation.step2') {
            //        $state.go('create-organisation.step3');
            //    }
            //}

            //function handleBack() {
            //    //console.log('back', $state.current.name);
            //    debugger;
            //    if ($state.current.name == 'create-organisation.step2') {
            //        $state.go('create-organisation.step1');
            //    }

            //    else if ($state.current.name == 'create-organisation.step3') {
            //        $state.go('create-organisation.step2');
            //    }
            //}

        });
})();