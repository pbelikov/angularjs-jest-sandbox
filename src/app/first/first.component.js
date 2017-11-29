import angular from 'angular';
import './first.module';

export default angular
	.module('firstModule')
	.component('firstComponent', {
		bindings: {},
		controller: 'firstController',
		controllerAs: 'firstCtrl',
		templateUrl: 'src/app/first/first.tpl.html'
	})
	.name;