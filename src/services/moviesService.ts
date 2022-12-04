import { useQuery } from '@tanstack/react-query';

import {
  getDiscoverMovies,
  getMovie,
  getRecommendedMovies,
  searchMovies,
} from '@/api/moviesApi';
import { discoverNames, queryKeys } from '@/constants';

export const useDiscoverMovies = (
  name: string = discoverNames.POPULAR,
  genreId?: number
) => {
  const params: Record<string, any> = {};
  if (genreId) {
    params.with_genres = genreId;
  }
  return useQuery({
    queryKey: [queryKeys.DISCOVER_MOVIES, name, genreId],
    queryFn: () => getDiscoverMovies(name, params),
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
