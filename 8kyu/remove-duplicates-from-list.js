// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]


// My Solutions

function distinct(a) {
  const noDupes = [... new Set(a)]
  return noDupes;
}



function distinct(a) {
  return [...new Set(a)];
}


function distinct(a) {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    if (!res.includes(a[i])) {
      res.push(a[i])
    }
  }
  return res
}