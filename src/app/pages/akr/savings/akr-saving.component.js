(function () {
  'use strict';

  angular.module('akr-pension')
    .component('akrSaving', {
      controller: ComponentController,
      templateUrl: 'app/pages/akr/savings/akr-saving.component.html',
      bindings: {
        saving: '<',
        showDepositLink: '<',
        type: '<',
        savingGoal: '<'
      }
    });

  /** @ngInject */
  function ComponentController(AkrWeb3Service, $location) {
    var ctrl = this;

    ctrl.$onInit = function () {
    };

    ctrl.invest = function () {
      $location.path('/savings/deposit/' + ctrl.type + '/false');
    };

    ctrl.additionalInfo = function () {
      return ctrl.saving.additionalInfo.replace('{}', ctrl.savingGoal.age);
    };
  }
})();