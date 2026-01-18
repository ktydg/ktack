import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10, // stale 10 minutes
      gcTime: 1000 * 60 * 15, // cache 15 minutes
    },
  },
});
