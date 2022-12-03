import apiClient from '@/lib/apiClient';
import { Movie } from '@/types';

type Response<T> = {
  results: T[];
  total_pages: number;
  total_results: number;
};

export const getMovies = async (): Promise<Response<Movie>> => {
  const { data } = await apiClient.get('/discover/movie');
  return data;
};

export const getMovie = async (id: string): Promise<Movie> => {
  const { data } = await apiClient.get(`/movie/${id}`);
  return data;
};
