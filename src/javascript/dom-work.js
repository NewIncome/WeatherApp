import layout from './layout';
import getTemp from './api-data';

const elems = () => {
  return {
    body: document.body,
    city: document.querySelector('#city'),
    bttn: document.querySelector('#submit'),
    title: document.querySelector('.title'),
    date: document.querySelector('.date'),
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

const updateInfo = (values) => {
  elems().title.innerHTML = `${values.titleDt}, ${values.countryDt}`;
  elems().rTemp.innerHTML = values.tempDT;
  elems().feels.innerHTML = values.feelsDt;
  elems().maxTemp.innerHTML = values.maxTempDT;
  elems().minTemp.innerHTML = values.minTempDT;
  elems().sky.innerHTML = values.skyDT;
  elems().cloud.innerHTML = values.cloudDT;
  elems().speed.innerHTML = values.speedDT;
  elems().humid.innerHTML = values.humidDT;
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