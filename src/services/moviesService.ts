import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import {
  getDiscoverMovies,
  getMovie,
  getRecommendedMovies,
  searchMovies,
} from '@/api/moviesApi';
import { discoverNames, queryKeys } from '@/constants';

type DiscoverMoviesParams = {
  name?: string;
  genreId?: number;
};

export const useInfiniteDiscoverMovies = ({
  name = discoverNames.POPULAR,
  genreId = undefined,
}: DiscoverMoviesParams) => {
  const params: Record<string, any> = {};
  if (genreId) {
    params.with_genres = genreId;
  }
  return useInfiniteQuery({
    queryKey: [queryKeys.DISCOVER_MOVIES, genreId],
    queryFn: ({ pageParam = 1 }) => {
      return getDiscoverMovies(name, { ...params, page: pageParam });
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.results.length) {
        return false;
      }
      const nextPage = lastPage?.page ? lastPage.page + 1 : 1;
      return nextPage;
    },
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

export const useInfiniteSearchMovies = (queryText: string) => {
  return useInfiniteQuery({
    queryKey: [queryKeys.SEARCH_MOVIES, queryText],
    queryFn: ({ pageParam = 1 }) => {
      return searchMovies(queryText, { page: pageParam });
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.results.length) {
        return false;
      }
      const nextPage = lastPage?.page ? lastPage.page + 1 : 1;
      return nextPage;
    },
  });
};
