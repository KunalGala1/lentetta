'use client';

import Link from 'next/link';
import NavLi from './NavLi';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className='p-8 flex justify-between items-center bg-slate-200 shadow'>
      <div>
        <Link href={'/'}>
          <h1 className='font-bold text-2xl'>Len Tetta</h1>
        </Link>
        <p className='font-light'>Composer</p>
      </div>
      <ul className='hidden sm:flex gap-4'>
        <NavLi>
          <Link
            href='/'
            className={`${pathname == '/' ? 'text-slate-500' : ''}`}
          >
            Home
          </Link>
        </NavLi>
        <NavLi>
          <Link
            href='/about'
            className={`${pathname == '/about' ? 'text-slate-500' : ''}`}
          >
            About
          </Link>
        </NavLi>
        <NavLi>
          <Link
            href={'/works'}
            className={`${pathname == '/works' ? 'text-slate-500' : ''}`}
          >
            Works
          </Link>
        </NavLi>
        <NavLi>
          <Link
            href='/music'
            className={`${pathname == '/music' ? 'text-slate-500' : ''}`}
          >
            Music
          </Link>
        </NavLi>
        <NavLi>
          <Link
            href='/contact'
            className={`${pathname == '/contact' ? 'text-slate-500' : ''}`}
          >
            Contact
          </Link>
        </NavLi>
      </ul>
    </nav>
  );
};
export default Nav;
