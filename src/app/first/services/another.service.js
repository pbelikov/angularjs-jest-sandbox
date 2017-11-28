module.exports = function (someService) {
	var service = this;
	
	service.callAnother = callAnother;
	
	function callAnother() {
		someService.consoleMe();
	}
}