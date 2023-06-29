// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained 

// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9


// My solutions

function expressionMatter(a, b, c) {
  const possibles = [
    a+b+c,
    a*b*c,
    a*b+c,
    a+b*c,
    (a+b)*c,
    a*(b+c),
    
  ];
  let maxValue = 0;
  
  for(let i = 0; i < possibles.length; i++) {
    maxValue = Math.max(maxValue, possibles[i])
  }
  
  return maxValue
}




function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  );
}





function expressionMatter(a, b, c) {
  return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
}