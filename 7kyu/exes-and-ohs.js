// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// // XO("zzoo") => false


// My Solutions


function XO(str) {
  let xResult = 0;
  let oResult = 0;
  const strArray = str.toLowerCase().split('').map(item => {
    if (item === 'x') {
      xResult++
    }else if (item === 'o') {
      oResult++
    }
  })
  if (xResult === oResult) {
    return true
  }else {
    return false
  }
}


function XO(str) {
  const xArray = str.toLowerCase().split('').filter(x => x === 'x')
  const yArray = str.toLowerCase().split('').filter(y => y === 'o')
  return xArray.length === yArray.length
}




function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}