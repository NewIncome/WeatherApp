import layout from './layout';

const elems = {
  body: document.body,
  city: document.querySelector('#city'),
  bttn: document.querySelector('.submit'),
  title: document.querySelector('.title'),
  date: document.querySelector('.date'),
  cloud: document.querySelector('.cloud'),
  sky: document.querySelector('#sky'),
  rTemp: document.querySelector('.realTemp'),
  feels: document.querySelector('.feels'),
  maxTemp: document.querySelector('.maxTemp'),
  minTemp: document.querySelector('.minTemp'),
  speed: document.querySelector('#speed'),
  humid: document.querySelector('#humidity'),
};

const render = () => {
  document.body.innerHTML = layout;
  setTimeout(() => {}, 0);

  return new Promise((resolve) => {
    if (elems.bttn !== null) {
      resolve('Rendered successfully');
    }
  });
};

const checkForClick = () => {
  let cityName = '';
  elems.bttn.onclick((e) => {
    // e.preventDefault();

    console.log('Button got clicked');
    console.log(e);
    cityName = elems.city.value;
  });

  return cityName;
};

const updateInfo = (values) => {
  elems.title.innerHTML = `${values.titleDt}, ${values.countryDt}`;
  elems.rTemp.innerHTML = values.tempDT;
  elems.feels.innerHTML = values.feelsDt;
  elems.maxTemp.innerHTML = values.maxTempDT;
  elems.minTemp.innerHTML = values.minTempDT;
  elems.sky.innerHTML = values.skyDT;
  elems.cloud.innerHTML = values.cloudDT;
  elems.speed.innerHTML = values.speedDT;
  elems.humid.innerHTML = values.humidDT;
};


export {
  render,
  elems,
  checkForClick,
  updateInfo,
};