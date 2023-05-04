// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


// My solutions
function doubleChar(str) {
	var word = '';
  for (var i = 0; i < str.length; i++){
  	word = word + str[i] + str[i];
  };
  return word;
};



const doubleChar = (str) => str.split("").map(c => c + c).join("");



function doubleChar(str) {
  return str.split("").map(function (c) {
    return c + c;
  }).join("");
}

