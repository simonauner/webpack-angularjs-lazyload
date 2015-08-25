var fooController = require('./foo.controller.js');

var mod = angular.module('foo', []);

mod.controller('FooController', ['$scope', fooController]);

module.exports = mod;
