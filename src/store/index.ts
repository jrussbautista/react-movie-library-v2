import create from 'zustand';
import { Movie } from '@/types';

type State = {
  favoriteMovies: Movie[];
  addFavoriteMovie: (favoriteMovie: Movie) => void;
  removeFavoriteMovie: (favoriteMovie: Movie) => void;
};

export const useStore = create<State>((set) => ({
  favoriteMovies: [],
  addFavoriteMovie: (favoriteMovie: Movie) =>
    set((state) => {
      const favoriteMovies = [...state.favoriteMovies, favoriteMovie];
      return {
        favoriteMovies,
      };
    }),
  removeFavoriteMovie: (favoriteMovie: Movie) =>
    set((state) => {
      const favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== favoriteMovie.id
      );
      return {
        favoriteMovies,
      };
    }),
}));
