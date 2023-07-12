// Make a program that takes a value (x) and returns "Bang" if the number is divisible by 3, "Boom" if it is divisible by 5, "BangBoom" if it divisible by 3 and 5, and "Miss" if it isn't divisible by any of them. Note: Your program should only return one value

// Ex: Input: 105 --> Output: "BangBoom" Ex: Input: 9 --> Output: "Bang" Ex:Input: 25 --> Output: "Boom"



// My Solutions

function multiple(x) {
  if (x % 15 === 0) {
    return "BangBoom"
  }
  else if (x % 5 === 0){
    return "Boom"
  }
  else if ( x % 3 === 0) {
    return "Bang"
  }
  else {
    return 'Miss'
  }
}







const multiple = x => {
  if (x % 5 === 0 && x % 3 === 0) return "BangBoom"
  if (x % 3 === 0) return "Bang"
  if (x % 5 === 0) return "Boom" 
  return 'Miss'
}







function multiple(x) {
  return x % 15 == 0 ? "BangBoom" : x % 3 == 0 ? "Bang" : x % 5 == 0 ? "Boom" : "Miss"
 }