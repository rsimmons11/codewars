// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.




// My solutions



function consonantCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'I', 'E', 'O', 'U']
  let counter = 0;
  
  for (let i = 0; i < str.length; i++ ) {
    const char = str[i]
    if (/[a-z]/i.test(char) && !vowels.includes(char)) {
      counter ++
    }
  }
  return counter
}




function consonantCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (!vowels.includes(char) && char.match(/[a-z]/i)) {
      counter++;
    }
  }
  
  return counter;
}