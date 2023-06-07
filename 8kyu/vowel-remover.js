// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// My Solutions 

function shortcut (string) {
  const vowel = ['a', 'e', 'i', 'o', 'u']
  return string.split("").filter(item => !vowel.includes(item)).join("")
  
}




function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}






