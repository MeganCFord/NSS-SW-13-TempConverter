//reference to the button elements in the DOM
var button = document.getElementById("converter");
var clearButton = document.getElementById("clearer");

//reference to where to put the final temperature in the DOM
var convertedTemp = document.getElementById("convertedTemp");

var finalTemp; //declaring to use later


//gets temperature from current temp box. it's a function which means it does not run until called.
var getTemp = function() {
  var gottenTemp = parseFloat(document.getElementById("currentTemp").value);
  console.log("input temperature", gottenTemp);
  return gottenTemp;
}

//converts a fahrenheit number to celsius.also a function, will not run until called.
function toCelsius () {
  return ((getTemp() - 32) * 5) / 9;
}

//converts a celsius number to fahrenheit. Function, will not run until called. 
function toFahrenheit () {
  return ((getTemp() * 9) / 5) + 32;
}


var determineConverter = function(event) { //had to put the word 'event' in here. not sure why.
  event.preventDefault(); //prevents the 'type submit' button type from reloading the entire page.
  //determines which way to convert
   if (document.getElementById("celsius").checked === true) {
    finalTemp = toCelsius(); //calls converter function which in turn calls text-grabber function.
    colorCelsius();
  } else {
    finalTemp = toFahrenheit(); //calls converter function which in turn calls text-grabber function. 
    colorFahrenheit();
  }
  console.log("final temp function has been correctly created. temp is", finalTemp );
  convertedTemp.innerHTML = finalTemp;  //put this INSIDE the function so it injects as part of the function, not at the beginning of the page load.
}


var colorCelsius = function() { //makes the things different colors based on the result.
if (finalTemp >= 32 ) {
  document.getElementById("convertedTemp").style.color = "red";
  } else if (finalTemp <= 0) {
    convertedTemp.style.color = "blue";
  } else {
    convertedTemp.style.color = "green";
  }
}
var colorFahrenheit = function() { //makes the things different colors based on the result.
if (finalTemp >= 90 ) {
  document.getElementById("convertedTemp").style.color = "red";
  } else if (finalTemp <= 32) {
    convertedTemp.style.color = "blue";
  } else {
    convertedTemp.style.color = "green";
  }
}

var cleartextfield = function () {
  convertedTemp.value = "";
}
button.addEventListener("click", determineConverter); //makes the function 'determineConverter' run when the button is clicked. 
clearButton.addEventListener("click", cleartextfield);
