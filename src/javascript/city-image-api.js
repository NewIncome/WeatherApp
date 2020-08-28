const rNum = (arr) => {
  const maxNum = arr.length;
  return Math.floor(Math.random() * maxNum);
};

const getCityImage = async (city) => {
  const pixResponse = await fetch(`https://pixabay.com/api/?key=18047346-216df018667992ef1ffc2341e&q=${city}&image_type=photo`);
  const pixImage = await pixResponse.json();

  const defaultImgResponse = await fetch('https://pixabay.com/api/?key=18047346-216df018667992ef1ffc2341e&q=city&image_type=photo');
  const defaultImage = await defaultImgResponse.json();

  if (typeof pixImage.hits[0] !== 'undefined') return pixImage.hits[0].largeImageURL;
  return defaultImage.hits[rNum(defaultImage.hits)].largeImageURL;
};

export default getCityImage;