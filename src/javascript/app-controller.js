import {
  render,
  checkForClick,
  changeTemp,
} from './dom-work';

function start() {
  // const rendered = new Promise((resolve, reject) => {
  //   // if (elems.body.children[0].children[0].children[1].hasChildNodes()) {
  //   if (render()) {
  //     resolve('Basic HTML rendered OK');
  //   } else {
  //     reject(new Error('Failed to render'));
  //   }
  // });

  render().then((mssg) => console.log(mssg)).then((message) => {
    console.log('before checking for click');
    const newSearch = checkForClick();
    console.log('after checking for click');
    console.log('City value: ' + newSearch);


    // getTemp(newSearch).then((newValues) => updateInfo(newValues));

    console.log(`This is the 'then': ${message}`);
  }).then((msg) => {
    changeTemp();
  });

  console.log('This is the rendered promise variable: ');
  console.log(render());
}


export default start;