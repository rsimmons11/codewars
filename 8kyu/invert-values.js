// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.


// My Solutions

function invert(array) {
  return array.map(num => num === 0 ? num : -num)
}



function invert(array) {
  let inversedArray = []
  for(let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      inversedArray.push(-array[i])
    }else {
      inversedArray.push(-array[i])
    }
  }
  return inversedArray
}




const invert = array => array.map(num => -num);