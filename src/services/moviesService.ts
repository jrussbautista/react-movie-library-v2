import { useQuery } from '@tanstack/react-query';

import { getMovies, getMovie } from '@/api/moviesApi';
import { queryKeys } from '@/constants';

export const useMovies = () => {
  return useQuery({
    queryKey: [queryKeys.MOVIES],
    queryFn: () => getMovies(),
  });
};

export const useMovie = (id: string) => {
  return useQuery({
    queryKey: [queryKeys.MOVIE, id],
    queryFn: () => getMovie(id),
  });
};
