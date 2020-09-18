var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newArray = [element, array[0]]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
var array = ['0', '1'];
  array.push('3');
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
   return array[index]
 }

function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift();
   return array
 }

function removeElementFromBeginningOfArray(array){
   return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
