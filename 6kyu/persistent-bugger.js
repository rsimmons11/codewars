// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// My Solutions 


// Define a function named persistence that takes a number (num) as its parameter.
function persistence(num) {
  // Convert the number to a string and then split it into an array of characters.
  const numArray = num.toString().split('');

  // Check if the length of the array is greater than 1 (i.e., more than one digit).
  if (numArray.length > 1) {
    // If there is more than one digit, calculate the product of all digits using reduce.
    // Recursively call the persistence function on the result of the reduce operation.
    // Add 1 to the result since we want to count the number of recursive calls.
    return persistence(numArray.reduce((acc, curr) => acc * curr, 1)) + 1;
  }

  // If there is only one digit, return 0.
  return 0;
}




function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num.toString().split('').reduce((t, c) => c * t);
  }
  return i;
}
