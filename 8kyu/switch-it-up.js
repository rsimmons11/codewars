// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.


// My Solutions 


function switchItUp(number){

  switch (number) {
    case 0:
      return 'Zero'
      break;
    case 1:
      return 'One'
      break;
    case 2:
      return 'Two'
      break;
    case 3:
      return 'Three'
      break;
    case 4:
      return 'Four'
      break;
    case 5:
      return 'Five'
      break;
    case 6:
      return 'Six'
      break;
    case 7:
      return 'Seven'
      break;
    case 8:
      return 'Eight'
      break;
    case 9:
      return 'Nine'
      break;
    
  }
  
}







switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]





function switchItUp(n){
  return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
}