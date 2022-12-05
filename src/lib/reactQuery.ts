import { QUERY_CLIENT_DEFAULT_STALE_TIME } from '@/constants';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      staleTime: QUERY_CLIENT_DEFAULT_STALE_TIME,
    },
  },
});
