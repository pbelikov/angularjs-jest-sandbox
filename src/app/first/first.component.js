require('./first.module');

var FirstController = require('./first.controller');

module.exports = angular
	.module('firstModule')
	.component('firstComponent', {
		bindings: {},
		controller: 'firstController',
		controllerAs: 'firstCtrl',
		templateUrl: 'src/app/first/first.tpl.html'
	})
	.name;