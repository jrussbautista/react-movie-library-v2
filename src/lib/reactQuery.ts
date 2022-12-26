import { QueryClient } from '@tanstack/react-query';
import { QUERY_CLIENT_DEFAULT_STALE_TIME } from '@/constants';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      staleTime: QUERY_CLIENT_DEFAULT_STALE_TIME,
    },
  },
});
