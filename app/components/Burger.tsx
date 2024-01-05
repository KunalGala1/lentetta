'use client';
import React, { useState } from 'react';

type BurgerProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

const Burger = ({ isOpen, toggleOpen }: BurgerProps) => {
  return (
    <div
      className={`group cursor-pointer space-y-1 transition z-20 sm:hidden ${
        isOpen ? 'fixed right-6' : ''
      }`}
      onClick={toggleOpen}
    >
      <div
        className={
          'bg-slate-950 w-10 h-1 rounded transition group-hover:bg-slate-800' +
          (isOpen ? ' rotate-45 translate-y-1' : '')
        }
      ></div>
      <div
        className={
          'bg-slate-950 w-10 h-1 rounded transition group-hover:bg-slate-800' +
          (isOpen ? ' -rotate-45 -translate-y-1' : '')
        }
      ></div>
    </div>
  );
};
export default Burger;
