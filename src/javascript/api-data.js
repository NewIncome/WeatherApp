async function getTemp(newCity) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=550a45bc4aa9613e4687926216e69765`);
  const weatherData = await response.json();
  console.log(weatherData);
  console.log(weatherData.main);

  return {
    titleDt: weatherData.name,
    countryDt: weatherData.sys.country,
    tempDT: weatherData.weather[0].main,
    feelsDt: weatherData.main.feels_like,
    maxTempDT: weatherData.main.temp_max,
    minTempDT: weatherData.main.temp_min,
    skyDT: weatherData.weather[0].description,
    cloudDT: weatherData.weather[0].icon,
    speedDT: weatherData.wind.speed, // m/s
    humidDT: weatherData.main.humidity, // %
  }
}

export default getTemp;