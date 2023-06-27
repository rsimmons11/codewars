// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



// My solutions


function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"]
  const lowerCaseStr = str.toLowerCase()
  let count = 0
  
  for( let i = 0; i < lowerCaseStr.length; i++) {
    if ( vowels.includes(lowerCaseStr[i])) {
      count ++
    }
  }
  
  return count;
}






function getCount(str) {
  var vowelsCount = 0;
  str.split("").forEach(function(x){
    if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
      vowelsCount += 1;
    }
  });  
  return vowelsCount;
}