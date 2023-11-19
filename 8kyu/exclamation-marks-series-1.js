// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


// My Solutions


function remove (string) {
  if (string.endsWith('!')) {
      return string.slice(0, -1)
      }
  return string;
}



function remove(string) {
  return string.endsWith('!') ? string.slice(0, -1) : string;
}