import { Movie } from '@/types';

export const checkIfMovieIsFavorite = (movies: Movie[], movieId: number) => {
  return movies.some((movie) => movie.id === movieId);
};

const favoriteMovieUtils = {
  checkIfMovieIsFavorite,
};

export default favoriteMovieUtils;
