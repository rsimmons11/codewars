// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// My Solutions


function findShort(s){
  let array = s.split(' ').sort((a,b) => a.length - b.length)
  
  console.log(array)
  return array[0].length
}





function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}