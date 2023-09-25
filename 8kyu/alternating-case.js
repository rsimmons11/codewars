// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 



// My Solutions 



String.prototype.toAlternatingCase = function () {
  const originalString = this.toString() 
  const newString = this.split('').map(char => {
    if (char === char.toLowerCase()) {
      return char.toUpperCase()
    }
    else {
      return char.toLowerCase()
    }
  });
  return newString.join('')

}









String.prototype.toAlternatingCase = function () {
  return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}








String.prototype.toAlternatingCase = function () {
  const originalStr = this.toString();
  const char = originalStr.split('');
  for (let i = 0; i < char.length; i++) {
    if (char[i] === char[i].toLowerCase()) {
      char[i] = char[i].toUpperCase() 
    }
    else {
      char[i] = char[i].toLowerCase()
    }
  }
  return char.join('')
}