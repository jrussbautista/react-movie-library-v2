import apiClient from '@/lib/apiClient';
import { Genre } from '@/types';

export const getGenres = async (): Promise<Genre[]> => {
  const { data } = await apiClient.get('genre/movie/list');
  return data?.genres;
};
