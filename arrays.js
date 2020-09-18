var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
chocolateBars()

function addElementToBeginningOfArray {
  var myArray = ['2', '3', '4', '5'];
  myArray.push('1');
  myArray
}

function destructivelyAddElementToBeginningOfArray {
  var myArray = ['2', '3', '4', '5'];
  myArray = ['5', ...myArray];
}

function addElementToEndOfArray {
  var myArray = ['1', '2', '3', '4'];
  myArray [...myArray, '5'];
}

function destructivelyAddElementToEndOfArray {
  var myArray = ['1', '2', '3', '4'];
  myArray = [...myArray, '5'];
}
