// This file is for testing purposes only - we need to bring common to every test in karma

var commonMethod = function() {
  var largeArray = [];

  console.log('running...');

  for (var i=0;i<100000000;i++) {
    largeArray.push(i);
  }

  return largeArray;
};