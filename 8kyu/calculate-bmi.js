// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



// My Solutions



function bmi(weight, height) {
let bmiTotal = (weight / height**2);
if (bmiTotal <= 18.5) {
  return "Underweight"

}
else if (bmiTotal <= 25.0) {
  return "Normal"
}
else if (bmiTotal <= 30.0) {
  return "Overweight"
}
else {
  return "Obese"
}
}