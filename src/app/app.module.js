var angular = require('angular');

require('./first/first.module');

module.exports = angular
	.module('sandbox', ['firstModule'])
	.name;


