import {
  render,
  elems,
  checkForClick,
  updateInfo,
} from './dom-work';
import getTemp from './api-data';

function start() {
  // const rendered = new Promise((resolve, reject) => {
  //   // if (elems.body.children[0].children[0].children[1].hasChildNodes()) {
  //   if (render()) {
  //     resolve('Basic HTML rendered OK');
  //   } else {
  //     reject(new Error('Failed to render'));
  //   }
  // });

  render().then((message) => {
    const newSearch = checkForClick();

    const newValues = getTemp(newSearch);

    updateInfo(newValues);

    console.log(`This is the 'then': ${message}`);
  });

  console.log('This is the rendered promise variable: ');
  console.log(render());
}


export default start;