import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import ModeToggle from './ModeToggle';
import SiteTitle from './SiteTitle';
import Menu from './Menu';
import { Page } from '../constants';

const Navbar = ({ currentPath }) => {
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    document.body.className = theme; // Apply the theme class to the body element
  }, [theme]);

  return (

    <div className="mt-10 flex w-full items-center justify-between md:mt-20">
      <SiteTitle isHome={currentPath === Page.Home} />

      <div className="items-center md:flex md:space-x-2">
        <nav className="absolute bottom-4 left-1/2 z-20 w-[90%] -translate-x-1/2 items-center rounded-3xl bg-pink px-8 py-2 dark:bg-orange/50 md:relative md:bottom-0 md:left-0 md:w-auto md:translate-x-0 md:bg-transparent dark:md:bg-transparent">
          <Menu currentPath={currentPath} />
        </nav>

        <ModeToggle theme={theme} setTheme={setTheme} />
      </div>
    </div>

  );
};

export default Navbar;