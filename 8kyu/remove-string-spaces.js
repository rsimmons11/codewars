// Write a function that removes the spaces from the string, then return the resultant string.


// My Solutions

function noSpace(x){
  const splitted = x.split(" ");
  const newStr = splitted.join("")
  return newStr;
}




const noSpace = x => {
  x.split(" ").join("")
}




const noSpace = x => x.split(" ").join("")