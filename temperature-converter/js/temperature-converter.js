var tempF = document.querySelector('.temp-f');
var tempC = document.querySelector('.temp-c');

//Events
tempF.addEventListener('keyup', calcFtoC);
tempC.addEventListener('keyup', calcCtoF);

function calcCelciusToFahrenheit(c) {
        var f = c * 9/5 + 32;
        return f;
      }
   
function calcFahrenheitToCelcius(f) {
        var c = (f - 32) * (5/9);
        return c;
      }

function calcFtoC(event) {
  if (tempF.value.length > 0) {
    tempC.value = calcFahrenheitToCelcius(tempF.value)
  } else {
    tempC.value = '';
  }
}
function calcCtoF(event) {
  if (tempC.value.length > 0) {
    tempF.value = calcCelciusToFahrenheit(tempC.value)
  } else {
    tempF.value = '';
  }
}
