async function getTemp(newCity = 'Toronto') {
  const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=550a45bc4aa9613e4687926216e69765`)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => new Error('404: City not found'));

  const values = {
    titleDt: weatherData.name,
    countryDt: weatherData.sys.country,
    tempDT: weatherData.main.temp,
    feelsDt: weatherData.main.feels_like,
    maxTempDT: weatherData.main.temp_max,
    minTempDT: weatherData.main.temp_min,
    skyDT: weatherData.weather[0].description,
    cloudDT: weatherData.weather[0].icon,
    speedDT: weatherData.wind.speed, // m/s
    humidDT: weatherData.main.humidity, // %
  };

  return values;
}

export default getTemp;