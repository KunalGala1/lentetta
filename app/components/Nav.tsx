'use client';

import Link from 'next/link';
import NavLi from './NavLi';
import { usePathname } from 'next/navigation';

import { useState } from 'react';

import Burger from './Burger';

const Nav = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const smoothScrollToTop = (duration: number): void => {
    const scrollToTop = (startTime: number): void => {
      const currentTime = Date.now();
      const timeElapsed = currentTime - startTime;
      const scrollY = window.scrollY;

      if (timeElapsed < duration) {
        window.scrollTo(0, scrollY - scrollY * (timeElapsed / duration));
        requestAnimationFrame(() => scrollToTop(startTime));
      } else {
        window.scrollTo(0, 0);
      }
    };

    requestAnimationFrame(() => scrollToTop(Date.now()));
  };

  const toggleOpen = () => {
    const currentScrollY = window.scrollY;
    const scrollDuration =
      currentScrollY > 0 ? Math.min(300, currentScrollY * 5) : 0;

    smoothScrollToTop(scrollDuration);

    setTimeout(() => {
      setIsOpen(!isOpen);

      if (!isOpen) {
        // Disable scrolling
        document.body.style.overflow = 'hidden';
      } else {
        // Enable scrolling
        document.body.style.overflow = '';
      }
    }, scrollDuration);
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className='p-8 flex justify-between items-center bg-blue-200 shadow'>
      {/* Name */}
      <div className='tracking-widest'>
        <Link href={'/'}>
          <h1 className='font-bold text-2xl'>Len Tetta</h1>
        </Link>
        <p className='font-light'>Composer</p>
      </div>
      <ul
        className={`sm:flex gap-4 ${
          isOpen
            ? 'flex flex-col justify-center items-center fixed w-full h-screen top-0 left-0 bg-white z-20'
            : 'hidden'
        }`}
      >
        <NavLi>
          <Link
            href='/'
            className={`${pathname == '/' ? 'text-slate-500' : ''}`}
            onClick={() => {
              closeNav();
            }}
          >
            Home
          </Link>
        </NavLi>
        <NavLi>
          <Link
            href='/about'
            className={`${pathname == '/about' ? 'text-slate-500' : ''}`}
            onClick={() => {
              closeNav();
            }}
          >
            About
          </Link>
        </NavLi>
        <NavLi>
          <Link
            href={'/works'}
            className={`${pathname == '/works' ? 'text-slate-500' : ''}`}
            onClick={() => {
              closeNav();
            }}
          >
            Works
          </Link>
        </NavLi>
        <NavLi>
          <Link
            href='/music'
            className={`${pathname == '/music' ? 'text-slate-500' : ''}`}
            onClick={() => {
              closeNav();
            }}
          >
            Music
          </Link>
        </NavLi>
        <NavLi>
          <Link
            href='/contact'
            className={`${pathname == '/contact' ? 'text-slate-500' : ''}`}
            onClick={() => {
              closeNav();
            }}
          >
            Contact
          </Link>
        </NavLi>
      </ul>
      <Burger isOpen={isOpen} toggleOpen={toggleOpen} />
    </nav>
  );
};
export default Nav;
