import angular from 'angular';

export default angular
	.module('firstModule')
	.service('someService', someServiceImpl)
	.name;
	
function someServiceImpl() {
	var service = this;
	
	service.consoleMe = consoleMe;
	service.testVar = 0;
	
	function consoleMe (val) {
		var a = val;
		service.testVar++;
		
	}
}