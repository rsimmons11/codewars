// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


// My Solutions



function positiveSum(arr) {
  const posNumsOnly = arr.filter(value => value > 0)
  if (posNumsOnly.length === 0) {
    return 0
  }
  else {
    return posNumsOnly.reduce((sum, current) => sum + current)
  }
}






function positiveSum(arr) {
  return arr.reduce((sum, current) => sum + (current > 0 ? current : 0),0)
}





function positiveSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
      total += arr[i]
    }
  }
  return total
}