// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


// My Solutions



var summation = function (num) {
  let sum = 0;
  for (i = 1; i <= num; i++) {
   
    sum += i
  }
  return sum
}





const summation = n => n * (n + 1) / 2;