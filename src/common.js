export default function() {
	let largeArray = [];
	
	for (let i=0;i<100000000;i++) {
		largeArray.push(i);
	}
	
	return largeArray;
}