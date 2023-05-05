function convertTemperature(temperature, scale) {
    if (scale === "C") {
      if (temperature >= 0 && temperature <= 100) {
        let degF = (temperature * 9/5) + 32;
        return `${temperature}°C is equal to ${degF.toFixed(2)}°F`;
      } else {
        return "Temperature input is out of range!";
      }
    } else if (scale === "F") {
      if (temperature >= 32 && temperature <= 212) {
        let degC = (temperature - 32) * 5/9;
        return `${temperature}°F is equal to ${degC.toFixed(2)}°C`;
      } else {
        return "Temperature input is out of range!";
      }
    } else {
      return "Invalid scale input!";
    }
  }
  
  // Example usage:
  console.log(convertTemperature(32, "C")); // Output: 32°C is equal to 89.60°F
  console.log(convertTemperature(100, "C")); // Output: 100°C is equal to 212.00°F
  console.log(convertTemperature(212, "F")); // Output: 212°F is equal to 100.00°C
  console.log(convertTemperature(-10, "C")); // Output: Temperature input is out of range!
  console.log(convertTemperature(300, "F")); // Output: Temperature input is out of range!
  console.log(convertTemperature(50, "K")); // Output: Invalid scale input!
  