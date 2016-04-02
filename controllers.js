'use strict';

const config = require("./config")

var main = angular.module('main', []);

main.controller('header', function ($scope) {
  $scope.projectName = config.projectName;
});
