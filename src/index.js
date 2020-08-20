import './styles/style.scss';

const bttn = document.querySelector('.submit');
const city = 'Naucalpan';

async function getTemp() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=550a45bc4aa9613e4687926216e69765`);
  const weatherData = await response.json();
  console.log(weatherData);
  console.log(weatherData.main);

  console.log(weatherData.name);
  console.log(weatherData.sys.country);

  console.log(weatherData.main.feels_like);
  console.log(weatherData.main.temp_max);
  console.log(weatherData.main.temp_min);

  console.log(weatherData.weather[0].main);
  console.log(weatherData.weather[0].description);
  console.log(weatherData.weather[0].icon);

  console.log(weatherData.wind.speed);
  console.log(weatherData.main.humidity);
}

bttn.onclick = getTemp();