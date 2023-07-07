// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false



// My solutions


function isIsogram(str){
  if(str === 0) {
    return true
  }

  let charSet = new Set()

  for(let char of str.toLowerCase()) {
    if(charSet.has(char)) {
      return false
    }
    else {
      charSet.add(char)
    }
  }
  return true
}








function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}