import { discoverNames } from '@/constants';
import apiClient from '@/lib/apiClient';
import { Movie } from '@/types';

type Response<T> = {
  results: T[];
  total_pages: number;
  total_results: number;
};

export const getDiscoverMovies = async (
  name: string = discoverNames.POPULAR
): Promise<Response<Movie>> => {
  const { data } = await apiClient.get(`/movie/${name}`);
  return data;
};

export const getMovie = async (id: string): Promise<Movie> => {
  const { data } = await apiClient.get(`/movie/${id}`);
  return data;
};

export const getRecommendedMovies = async (
  id: string
): Promise<Response<Movie>> => {
  const { data } = await apiClient.get(`/movie/${id}/recommendations`);
  return data;
};

export const searchMovies = async (
  queryText: string
): Promise<Response<Movie>> => {
  const { data } = await apiClient.get(`search/movie?query=${queryText}`);
  return data;
};
