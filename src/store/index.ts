import create from 'zustand';
import { persist } from 'zustand/middleware';

import { Movie } from '@/types';

type State = {
  favoriteMovies: Movie[];
  addFavoriteMovie: (favoriteMovie: Movie) => void;
  removeFavoriteMovie: (favoriteMovie: Movie) => void;
};

export const useStore = create<State>()(
  persist(
    (set, get) => ({
      favoriteMovies: [],
      addFavoriteMovie: (favoriteMovie: Movie) => {
        const favoriteMovies = [...get().favoriteMovies, favoriteMovie];
        return set({ favoriteMovies });
      },
      removeFavoriteMovie: (favoriteMovie: Movie) => {
        const favoriteMovies = get().favoriteMovies.filter(
          (movie) => movie.id !== favoriteMovie.id
        );
        return set({ favoriteMovies });
      },
    }),
    {
      name: 'favorite-movies',
    }
  )
);
