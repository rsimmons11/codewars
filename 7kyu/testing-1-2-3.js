// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)




// My solutions


var number = function(array){
  return array.map(function(element, index) {
    let lineNumber = index + 1
    return lineNumber + ': ' + element
    
  })
}




let number = (array) => array.map((element, index) => `${index + 1}: ${element}`)





var number = function(arr) {
  var newArr = [];
    if (arr.length === 0) {
      return [];
    } else {
      for (var i = 0, len = arr.length; i < len; i += 1) {
        newArr.push((i + 1) + ': ' + arr[i]);
      }
    }
    return newArr;
  }