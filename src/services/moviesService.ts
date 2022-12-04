import { useQuery } from '@tanstack/react-query';

import {
  getDiscoverMovies,
  getMovie,
  getRecommendedMovies,
  searchMovies,
} from '@/api/moviesApi';
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

export const useRecommendedMovies = (id: string) => {
  return useQuery({
    queryKey: [queryKeys.RECOMMENDED_MOVIES, id],
    queryFn: () => getRecommendedMovies(id),
  });
};

export const useSearchMovies = (queryText: string) => {
  return useQuery({
    queryKey: [queryKeys.SEARCH_MOVIES, queryText],
    queryFn: () => searchMovies(queryText),
  });
};
