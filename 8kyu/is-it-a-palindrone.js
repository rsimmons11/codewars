// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".


// My Solutions



function isPalindrome(x) {
  let cleanStr = x.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let reversedStr = cleanStr.split('').reverse().join('')
  return cleanStr === reversedStr
 }





 const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}