import { useQuery } from '@tanstack/react-query';

import { getDiscoverMovies, getMovie } from '@/api/moviesApi';
import { discoverNames, queryKeys } from '@/constants';

export const useDiscoverMovies = (name: string = discoverNames.POPULAR) => {
  return useQuery({
    queryKey: [queryKeys.DISCOVER_MOVIES, name],
    queryFn: () => getDiscoverMovies(name),
  });
};

export const useMovie = (id: string) => {
  return useQuery({
    queryKey: [queryKeys.MOVIE, id],
    queryFn: () => getMovie(id),
  });
};
