import { discoverNames } from '@/constants';
import apiClient from '@/lib/apiClient';
import { Movie } from '@/types';

type Response<T> = {
  results: T[];
  total_pages: number;
  total_results: number;
  page?: number;
};

export const getDiscoverMovies = async (
  name: string = discoverNames.POPULAR,
  params?: Record<string, any>
): Promise<Response<Movie>> => {
  const { data } = await apiClient.get(`/movie/${name}`, { params });
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
  queryText: string,
  params: Record<string, any> = {}
): Promise<Response<Movie>> => {
  const { data } = await apiClient.get(`search/movie?query=${queryText}`, {
    params,
  });
  return data;
};
