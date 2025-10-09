import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from '../routerTree.gen';
import { queryClient } from './TanQuery/queryClient';

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const TanRouterProvider = () => {
  return <RouterProvider router={router} />;
};
