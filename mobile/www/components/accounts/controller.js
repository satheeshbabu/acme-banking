(function() {

    'use strict';

    angular.module('app').controller('AccountController', AccountController);

    AccountController.$inject = ['accountService'];

    function AccountController(accountService) {
        var vm = this;
        vm.accounts = [];

        activate();

        function activate() {
            accountService.getAccounts()
                .then(function(response) {
                    vm.accounts = response.data;
                }).catch(function(err) {
                    console.log(err);
                });
        }
    };

})();
