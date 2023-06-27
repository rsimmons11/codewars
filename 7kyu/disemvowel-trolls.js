// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.A




// My solutions



function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  // turn string into  an array 
  const strToArr = str.split("")
  //filter array leaving no vowels
  const noVowels = strToArr.filter(x => !vowels.includes(x))
  // join the array back into a string and return it)
  return noVowels.join("")
}








const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}







const disemvowel = (str) => {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let newStr = '';
	for (let i = 0; i <= str.length; i++) {
		let char = str.charAt(i);
		if (vowels.indexOf(char) == -1) {
			newStr += char;
		}
	}
		return newStr;
		
	
};