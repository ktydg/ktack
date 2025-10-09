import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <main className='flex flex-1 flex-col items-center justify-center gap-3 bg-zinc-800 text-white'>
      <img
        className='rounded-full shadow-xl'
        src='./android-chrome-192x192.png'
      />
      <h1 className='text-5xl'>Ktydg Stack</h1>
      <p className='text-xl'>Startup template for myself</p>
    </main>
  );
}
