// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398


// My solutions


function sum (numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
};




function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}




const sum = n => n.reduce((a,b) => a+b, 0);





let array = [1, 5.2, 4, 0, -1];
function sum (array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res = res + array[i];
  }
  return res;
  
}
console.log(sum(array));