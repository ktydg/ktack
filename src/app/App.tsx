import { queryClient } from '@/shared/config/queryClient';
import { Meta } from './Meta';
import { TanQueryProvider } from './providers/TanQueryProvider';
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
