require('./index');
require('angular-mocks');

describe('test', function () {
    it('should work', function () {
        expect(true).toBeTruthy();
    });

    it('should create angular module', function () {
        var BarController;
        angular.mock.module('bar');
        inject(function ($controller, $rootScope) {
            BarController = $controller('BarController', {
                $scope: $rootScope.$new()
            });
        });

        expect(BarController).toBeDefined();
    });

    it('should be 123 is scope is valid', function () {
        var BarController;
        angular.mock.module('bar');
        inject(function ($controller, $rootScope) {
            var scope = $rootScope.$new();
            scope.valid = true;
            BarController = $controller('BarController', {
                $scope: scope
            });
        });

        expect(BarController.number).toBe(123);
    });
});
