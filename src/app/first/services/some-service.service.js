module.exports = function () {
	let service = this;
	
	service.consoleMe = consoleMe;
	service.testVar = 0;
	
	function consoleMe () {
		service.testVar++;
	}
	
	return service;
}