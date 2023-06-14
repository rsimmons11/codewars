// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.


// My Solutions


function abbrevName(name){

  const words = name.split(" ");
  const initials = words.map(word => word[0].toUpperCase());
  return initials.join(".")

}




function abbrevName(name){

  return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}