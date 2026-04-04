const convertToCelsius = function(tempFarenheit) {
  let result = (tempFarenheit - 32) * 5/9;
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(tempCelsius) {
  let result = tempCelsius * 9 / 5 + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
