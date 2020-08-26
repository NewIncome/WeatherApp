import layout from './layout';
import getTemp from './api-data';
import getCityImage from './city-image-api';

const elems = () => {
  return {
    body: document.body,
    backgnd: document.querySelector('#backgnd'),
    city: document.querySelector('#city'),
    bttn: document.querySelector('#submit'),
    title: document.querySelector('.title'),
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
  };
};

const render = () => {
  document.body.innerHTML = layout;
  setTimeout(() => {}, 100000);
  console.log(elems());

  return new Promise((resolve) => {
    if (elems().body.childElementCount > 1) {
      resolve('Rendered successfully');
    }
  });
};

const makeNewDate = () => {
  const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const date = new Date();
  return `${Months[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()}`;
};

const updateInfo = (values, city) => {
  getCityImage(city).then((link) => {
    elems().backgnd.style.backgroundImage = `url(${link})`;
  });
  elems().title.innerHTML = `${values.titleDt}, ${values.countryDt}`;
  elems().date.innerHTML = makeNewDate();
  elems().flag.src = `https://flagpedia.net/data/flags/w580/${values.countryDt.toLowerCase()}.png`;
  elems().rTemp.innerHTML = values.tempDT.toFixed(1);
  elems().feels.innerHTML = values.feelsDt.toFixed(1);
  elems().maxTemp.innerHTML = values.maxTempDT.toFixed(1);
  elems().minTemp.innerHTML = values.minTempDT.toFixed(1);
  elems().sky.innerHTML = values.skyDT;
  elems().cloud.src = `https://openweathermap.org/img/wn/${values.cloudDT}@4x.png`;
  elems().speed.innerHTML = `${values.speedDT} m/s`;
  elems().humid.innerHTML = `${values.humidDT} %`;
};

const checkForClick = () => {
  let cityName = '';
  // elems.bttn.addEventListener('click', clickedBttn);

  elems().bttn.onclick = () => {
    cityName = elems().city.value;

    getTemp(cityName).then((newValues) => updateInfo(newValues, cityName));
  };

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
};

// let f = document.querySelector('#flag');
// f.onclick = () => console.log('flag was clicked');