import { useQuery } from '@tanstack/react-query';

import { getMovies } from '@/api/moviesApi';
import { queryKeys } from '@/constants';

export const useMovies = () => {
  return useQuery({
    queryKey: [queryKeys.MOVIES],
    queryFn: () => getMovies(),
  });
};
