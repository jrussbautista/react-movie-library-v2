const calculateMovieRating = (rating: number) => {
  return Math.round(rating / 2);
};

const movieUtils = {
  calculateMovieRating,
};

export default movieUtils;
