// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000



// My solutions

function past(h, m, s){
  const miliPerSec = s * 1000;
  const miliPerMin = m * 60 * 1000;
  const miliPerHour = h * 60 * 60 * 1000;
  let totalMiliSeconds = miliPerSec + miliPerMin + miliPerHour
  return totalMiliSeconds
}




function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}





const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);