import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import ImgLogo from '../Assests/GreenTrack Logo.png';
import { Link, NavLink } from 'react-router';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <header>
      <div className='py-4 bg-white text-black dark:bg-green-950 dark:text-white transition-all"'>
        <div className="w-11/12 mx-auto flex justify-between items-center rounded-full px-4 lg:px-10 py-4 h-16 border border-black dark:border-white bg-white dark:bg-green-950 text-black dark:text-white transition-all">
          <Link to="/">
            <div className="flex items-center">
              <img src={ImgLogo} alt="Logo" className="w-10 h-10" />
              <h1 className="font-Rancho text-3xl font-bold ml-2">
                Green
                <span className="text-green-900 dark:text-white">Track</span>
              </h1>
            </div>
          </Link>

          <nav className="hidden lg:block">
            <ul className="text-xl font-Rancho flex space-x-5">
              {[
                ['/', 'Home'],
                ['/all-plants', 'All Plants'],
                ['/add-plant', 'Add Plant'],
                ['/my-plants', 'My Plants'],
              ].map(([to, label]) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? 'px-6 py-2 text-xl font-semibold border-2 border-green-900 dark:border-white rounded-full text-green-900 dark:text-white'
                        : 'text-black dark:text-white'
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-xl text-black dark:text-yellow-300 hover:scale-110 transition-transform"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button className="px-6 py-2 font-Rancho font-semibold border-2 border-green-900 dark:border-white rounded-full text-black dark:text-white hover:bg-green-900 dark:hover:bg-white hover:text-white dark:hover:text-green-900 transition-all ease-in-out">
              Log-In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
