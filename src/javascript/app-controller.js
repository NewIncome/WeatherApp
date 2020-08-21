import { render, elems } from './dom-work';
import getTemp from './api-data';

function start() {
  const rendered = new Promise((resolve, reject) => {
    render();

    if (elems.body.childElementCount > 1) {
      resolve('Basic HTML rendered OK');
    } else {
      reject(new Error('Failed to render'));
    }
  });

  rendered.then((message) => {
    elems.bttn.onclick = getTemp();
    console.log(`This is the 'then': ${message}`);
  });
  // .catch((message) => {
  //   console.log(`This is the 'catch': ${message}`);
  // });

  console.log('This is the rendered promise variable: ');
  console.log(rendered);
}


export default start;