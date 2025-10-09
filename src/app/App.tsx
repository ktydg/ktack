import { Meta } from './Meta';
import { queryClient } from './providers/TanQuery/queryClient';
import { TanQueryProvider } from './providers/TanQuery/TanQueryProvider';
import { TanRouterProvider } from './providers/TanRouterProvider';

export function App() {
  return (
    <>
      <Meta />
      <TanQueryProvider queryClient={queryClient}>
        <TanRouterProvider />
      </TanQueryProvider>
    </>
  );
}
