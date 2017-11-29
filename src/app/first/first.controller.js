import angular from 'angular';

export default angular
	.module('firstModule')
	.controller('firstController', firstControllerImpl)
	.name;

function firstControllerImpl() {
	var ctrl = this;
	
	ctrl.someText = 'Here we go with small sandbox';
	
	ctrl.$onInit = onInit;
	
	function onInit() {
		console.log('Init complete!')
	}
}