import { queryClient } from '@/shared/config/queryClient';
import { TanQueryProvider } from './providers/TanQueryProvider';
import { TanRouterProvider } from './providers/TanRouterProvider';

export function App() {
  return (
    <TanQueryProvider queryClient={queryClient}>
      <TanRouterProvider />
    </TanQueryProvider>
  );
}
