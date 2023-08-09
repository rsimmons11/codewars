// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.



// My Solutions




function digitize(n) {
  let array = n.toString().split('').reverse().map(Number)
  return array
}





