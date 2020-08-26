import {
  render,
  checkForClick,
  changeTemp,
} from './dom-work';

function start() {
  render().then(() => {
    checkForClick();
  }).then(() => {
    changeTemp();
  });
}

export default start;