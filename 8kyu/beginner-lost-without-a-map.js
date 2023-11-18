// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


// My Solutions



function maps(x) {
  let doubledArray = x.map(value => {
    return value * 2
  });
  return doubledArray
}





function maps(x) {
  let doubledArray = x.map(value => value *2);
  return doubledArray;
}



function maps(x) {
  return x.map(value => value * 2)
}




const maps = arr => arr.map(x => x * 2)