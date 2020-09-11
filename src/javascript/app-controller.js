import {
  render,
  checkForClick,
  changeTemp,
} from './dom-work';

const start = () => {
  render().then(() => {
    checkForClick();
  }).then(() => {
    changeTemp();
  });
};

export default start;