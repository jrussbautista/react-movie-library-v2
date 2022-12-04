import { useQuery } from '@tanstack/react-query';

import { getGenres } from '@/api/genresApi';
import { queryKeys } from '@/constants';

export const useGenres = () => {
  return useQuery({
    queryKey: [queryKeys.GENRES],
    queryFn: () => getGenres(),
  });
};
