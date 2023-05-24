// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



// My solutions

function findAverage(array) {
  
  if (array.length === 0 ) {
    return 0;
  }
  else {

    let total = 0 
    for (let i = 0; i < array.length; i++) {
      total = total + array[i]
    }
    const average = (total / array.length) 
    console.log(average)
    return average
  
  }
    
}    



var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}



