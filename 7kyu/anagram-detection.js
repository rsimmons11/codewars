// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


// My Solutions


var isAnagram = function(test, original) {
  const testArray = test.toLowerCase().split('');
  const originalArray = original.toLowerCase().split('')

  if (testArray.length !== originalArray.length) {
    return false
  }
  return (testArray.every(char => originalArray.includes(char)) && originalArray.every(char => testArray.includes(char)))
};






var isAnagram = function(test, original) {
  // Remove spaces and convert both strings to lowercase
  const cleanedTest = test.replace(/\s/g, '').toLowerCase();
  const cleanedOriginal = original.replace(/\s/g, '').toLowerCase();

  // Check if the lengths of the cleaned strings are different
  if (cleanedTest.length !== cleanedOriginal.length) {
    return false;
  }

  // Create character frequency maps for both strings
  const frequencyTest = {}; // Initialize an empty object to store the frequency of characters in the test string.
  const frequencyOriginal = {}; // Initialize an empty object to store the frequency of characters in the original string.

  // Loop through the characters in the cleanedTest string
  for (const char of cleanedTest) {
    // For each character, check if it already exists in the frequencyTest map.
    // If it exists, increment its frequency by 1; otherwise, initialize it to 1.
    frequencyTest[char] = (frequencyTest[char] || 0) + 1;
  }

  // Loop through the characters in the cleanedOriginal string
  for (const char of cleanedOriginal) {
    // Similarly, for each character, check if it already exists in the frequencyOriginal map.
    // If it exists, increment its frequency by 1; otherwise, initialize it to 1.
    frequencyOriginal[char] = (frequencyOriginal[char] || 0) + 1;
  }

  // Compare character frequency maps
  for (const char in frequencyTest) {
    if (frequencyTest[char] !== frequencyOriginal[char]) {
      return false;
    }
  }

  return true;
};





