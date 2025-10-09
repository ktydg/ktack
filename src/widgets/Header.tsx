import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className='w-full bg-zinc-800 text-white'>
      <nav className='mx-auto flex max-w-360 justify-around p-2'>
        <div className='px-2 font-bold'>
          <Link to='/'>Home</Link>
        </div>
      </nav>
    </header>
  );
}
