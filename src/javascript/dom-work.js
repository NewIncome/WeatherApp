import layout from './layout';
import getTemp from './api-data';

const elems = {
  body: document.body,
  bttn: document.querySelector('.submit'),
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
  setTimeout(function (){}, 0);

  return new Promise((resolve) => {
    if (elems.bttn !== null) {
      resolve('Rendered successfully');
    }
  });
};


const checkForClick = () => {
  elems.bttn.onclick = getTemp();
};


export { render, elems, checkForClick };