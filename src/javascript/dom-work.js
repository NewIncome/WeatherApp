import layout from './layout';
import getTemp from './api-data';

const elems = () => {
  return {
    body: document.body,
    city: document.querySelector('#city'),
    bttn: document.querySelector('#submit'),
    title: document.querySelector('.title'),
    date: document.querySelector('.date'),
    flag: document.querySelector('#flag'),
    cloud: document.querySelector('#cloud'),
    sky: document.querySelector('#sky'),
    rTemp: document.querySelector('.realTemp'),
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
  const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const date = new Date();
  return `${Months[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()}`;
};

const updateInfo = (values) => {
  elems().title.innerHTML = `${values.titleDt}, ${values.countryDt}`;
  elems().date.innerHTML = makeNewDate();
  elems().flag.src = `https://flagpedia.net/data/flags/w580/${values.countryDt.toLowerCase()}.png`;
  elems().rTemp.innerHTML = `${values.tempDT.toFixed(1)}°`;
  elems().feels.innerHTML = `${values.feelsDt.toFixed(1)}°`;
  elems().maxTemp.innerHTML = `${values.maxTempDT}°`;
  elems().minTemp.innerHTML = `${values.minTempDT}°`;
  elems().sky.innerHTML = values.skyDT;
  elems().cloud.src = `https://openweathermap.org/img/wn/${values.cloudDT}@4x.png`;
  elems().speed.innerHTML = `${values.speedDT} m/s`;
  elems().humid.innerHTML = `${values.humidDT} %`;
};

const checkForClick = () => {
  let cityName = '';
  // elems.bttn.addEventListener('click', clickedBttn);

  elems().bttn.onclick = (e) => {
    console.log('Button got clicked');
    cityName = elems().city.value;

    getTemp(cityName).then((newValues) => updateInfo(newValues));
  };

  return cityName;
};


export {
  render,
  elems,
  checkForClick,
  updateInfo,
};

// let f = document.querySelector('#flag');
// f.onclick = () => console.log('flag was clicked');