// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My Solutions



function removeExclamationMarks(s) {
  const charToOmit = '!'
  const stringToArray = s.split('').filter(char => !charToOmit.includes(char))
  return stringToArray.join('')
}





function removeExclamationMarks(s) {
  return s.replace(/!/gi, "");
}