let weight;
let height;
document.getElementById("enter").onclick = function() {
  weight = document.getElementById("inputWeight").value;
  height = document.getElementById("inputHeight").value;
  let bmi = Math.round(weight / Math.pow(height, 2));
  let ans = document.getElementById("bmians");

  if (height === "" || weight  === ""){
    ans.innerHTML = "Please Enter the values ";
  }else if (height <= 0 || weight <= 0){
    ans.innerHTML = "Weight or height cannot be zero";
  } else if (bmi < 18) {
    ans.innerHTML = "Your BMI is " + bmi + ", so you are underweight";
  }else if(bmi > 18 && bmi < 24){
    ans.innerHTML = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    ans.innerHTML = "Your BMI is " + bmi + ", so you are overweight.";
  }
};
function reset() {
  document.getElementById("inputWeight").value = "";
  document.getElementById("inputHeight").value = "";
  document.getElementById("bmians").innerHTML = "Your Answer will appear here";
}

