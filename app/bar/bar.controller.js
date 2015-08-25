(function () {
    require('angular');

    module.exports = angular.module('bar', [])
        .controller('BarController', BarController);

    function BarController($scope) {
        var viewModel = this;
        console.log('bar controller');

        if ($scope.valid) {
            viewModel.number = 123;
        } else {
            viewModel.number = 0;
        }
    }
})();
