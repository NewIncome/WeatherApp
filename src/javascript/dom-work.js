import layout from './layout';

const render = () => {
  document.body.innerHTML = layout;
};

const elems = {
  body: document.body,
  bttn: document.querySelector('.submit'),
};


export { render, elems };