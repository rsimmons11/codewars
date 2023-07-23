// Write a function that returns both the minimum and maximum number of the given list/array.


// My Solutions





function minMax(arr) {
  let minMaxArr = [];
  let newArr = arr.slice().sort((a, b) => a - b);
  console.log(newArr);
  minMaxArr.push(newArr[0]);
  minMaxArr.push(newArr[newArr.length - 1]);
  return minMaxArr;
}





function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}






const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];