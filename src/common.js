module.exports = function() {
	var largeArray = [];
	
	for (var i=0;i<100000000;i++) {
		largeArray.push(i);
	}
	
	return largeArray;
}