const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

function convertImage(img) {
  return `${IMAGE_URL}${img}`;
}

function calculateStars(qualify) {
  const max_qualify = 10;
  const max_stars = 5;

  const calculate = Math.round((max_stars * qualify) / max_qualify);

  const stars = new Array(5).fill({value: false});

  const newStars = [];

  for (let i = 0; i < stars; i++) {
    if (i < calculate - 1) {
      newStars.push({value: true});
    }
    newStars.push({value: false});
  }

  return newStars;
}
