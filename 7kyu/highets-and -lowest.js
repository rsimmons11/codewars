// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"



// My solutions


function highAndLow(numbers){
  const numberedArray = numbers.split(' ').map(Number)
  const highestNum = Math.max(...numberedArray)
  const lowestNum = Math.min(...numberedArray)

  return `${highestNum} ${lowestNum}`
}









function findMinMax(numbers) {
  // Split the string into an array of numbers
  var numberArray = numbers.split(" ").map(Number);

  // Find the maximum and minimum numbers in the array
  var max = Math.max.apply(null, numberArray);
  var min = Math.min.apply(null, numberArray);

  // Return the highest and lowest numbers
  return { highest: max, lowest: min };
}