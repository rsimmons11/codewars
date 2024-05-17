// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// My Solutioins


function removeUrlAnchor(url){
  
  const anchorIndex =  url.indexOf('#')
  console.log(anchorIndex)
   
  if (anchorIndex !== -1) {
    let newUrl = url.split('').splice(0, anchorIndex).join('')
    console.log(newUrl)
    return newUrl
  } else {
    return url
  }
 }




 function removeUrlAnchor(url){
  return url.split('#')[0];
}