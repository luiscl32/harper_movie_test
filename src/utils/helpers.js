const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

function convertImage(img) {
  return `${IMAGE_URL}${img}`;
}

function calculateStars(qualify) {
  const max_qualify = 10;
  const max_stars = 5;

  const starCalculate = Math.round((max_stars * qualify) / max_qualify);

  const calculate = starCalculate === 0 ? 1 : starCalculate;

  var newStars = [];

  for (let i = 0; i < max_stars; i++) {
    if (i < calculate) {
      newStars[i] = true;
    } else {
      newStars[i] = false;
    }
  }
  return newStars;
}

export {convertImage, calculateStars};
