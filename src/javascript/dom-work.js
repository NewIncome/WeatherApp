import layout from './layout';
import getTemp from './api-data';
import getCityImage from './city-image-api';

const colorTemps = {
  0: '#b3c6ff',
  10: '#b3e4ff',
  20: '#fff8b3',
  30: '#ffecb3',
  40: '#ffc6b3',
};

const elems = () => ({
  body: document.body,
  backgnd: document.querySelector('#backgnd'),
  city: document.querySelector('#city'),
  bttn: document.querySelector('#submit'),
  title: document.querySelector('.title'),
  pgBttm: document.querySelector('#bottom'),
  error: document.querySelector('#error'),
  errMssg: document.querySelector('.errMssg'),
  date: document.querySelector('.date'),
  flag: document.querySelector('#flag'),
  cloud: document.querySelector('#cloud'),
  sky: document.querySelector('#sky'),
  rTemp: document.querySelector('.realTemp'),
  degree: document.querySelector('#degrees'),
  feels: document.querySelector('.feels'),
  maxTemp: document.querySelector('.maxTemp'),
  minTemp: document.querySelector('.minTemp'),
  speed: document.querySelector('#speed'),
  humid: document.querySelector('#humidity'),
});

const render = () => {
  document.body.innerHTML = layout;
  setTimeout(() => {}, 100000);
  elems().backgnd.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2018/06/03/00/18/sea-3449509_1280.jpg")';

  return new Promise((resolve) => {
    if (elems().body.childElementCount > 1) {
      resolve('Rendered successfully');
    }
  });
};

const makeNewDate = () => {
  const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const date = new Date();
  return `${Months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

const updateInfo = ({
  titleDt,
  countryDt,
  tempDT,
  feelsDt,
  maxTempDT,
  minTempDT,
  skyDT,
  cloudDT,
  speedDT,
  humidDT,
}, city) => {
  elems().body.style.backgroundColor = colorTemps[`${((tempDT / 10).toFixed(0)) * 10}`];
  getCityImage(city).then((link) => {
    elems().backgnd.style.backgroundImage = `url(${link})`;
  });
  elems().title.innerHTML = `${titleDt}, ${countryDt}`;
  elems().pgBttm.className = 'unhidden';
  elems().error.className = 'hidden';
  elems().date.innerHTML = makeNewDate();
  elems().flag.src = `https://flagpedia.net/data/flags/w580/${countryDt.toLowerCase()}.png`;
  elems().rTemp.innerHTML = tempDT.toFixed(1);
  elems().feels.innerHTML = feelsDt.toFixed(1);
  elems().maxTemp.innerHTML = maxTempDT.toFixed(1);
  elems().minTemp.innerHTML = minTempDT.toFixed(1);
  elems().sky.innerHTML = skyDT;
  elems().cloud.src = `https://openweathermap.org/img/wn/${cloudDT}@4x.png`;
  elems().speed.innerHTML = `${speedDT} m/s`;
  elems().humid.innerHTML = `${humidDT} %`;
  // reset temp
  elems().degree.className = 'celsius';
};

const errorFunc = () => {
  elems().pgBttm.className = 'hidden';
  elems().error.className = 'unhidden';
};

const checkForClick = () => {
  let cityName = '';

  document.body.parentNode.addEventListener('submit', (e) => {
    e.preventDefault();

    cityName = elems().city.value;
    getTemp(cityName)
      .then((newValues) => updateInfo(newValues, cityName))
      .catch((err) => errorFunc(err));
  });

  return cityName;
};

const tempC2F = (tempC) => ((tempC * (9 / 5)) + 32).toFixed(1);

const tempF2C = (tempF) => ((tempF - 32) / 1.8).toFixed(1);

const updateTempValues = (changeFunc) => {
  elems().rTemp.innerHTML = changeFunc(+elems().rTemp.innerHTML);
  elems().feels.innerHTML = changeFunc(+elems().feels.innerHTML);
  elems().maxTemp.innerHTML = changeFunc(+elems().maxTemp.innerHTML);
  elems().minTemp.innerHTML = changeFunc(+elems().minTemp.innerHTML);
};

const changeTemp = () => {
  elems().degree.onclick = () => {
    if (elems().degree.className === 'celsius') {
      elems().degree.className = 'farenheight';
      updateTempValues(tempC2F);
    } else {
      elems().degree.className = 'celsius';
      updateTempValues(tempF2C);
    }
  };
};

export {
  render,
  checkForClick,
  changeTemp,
  errorFunc,
};