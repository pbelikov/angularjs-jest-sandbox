var angular = require('angular');

var firstComponent = require('./first.component');
var FirstController = require('./first.controller');

module.exports = angular
	.module('firstModule', [])
	.service('someService', someService)
	.component({
		bindings: {},
		controller: FirstController,
		controllerAs: 'firstCtrl'
	})
	.name;