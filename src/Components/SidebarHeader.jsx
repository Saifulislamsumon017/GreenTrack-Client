import React, { useState, useEffect, useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router';
import ImgLogo from '../Assests/GreenTrack Logo.webp';
import { AuthContext } from '../Context/AuthContext';

const SidebarHeader = () => {
  const { user, signOutUser } = useContext(AuthContext);

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

  const handleLogout = () => {
    signOutUser().catch(console.error);
  };

  return (
    <header className="md:ml-[300px] fixed top-0 right-0 left-0 z-40 bg-white dark:bg-green-950 text-black dark:text-white h-16 flex items-center justify-between px-6 border-b border-gray-300 dark:border-white transition-all">
      {/* Logo or page title */}
      <Link to="/" className="flex items-center gap-2">
        <img src={ImgLogo} alt="Logo" className="w-8 h-8" />
        <h1 className="font-Rancho text-2xl font-bold">
          Green<span className="text-green-900 dark:text-white">Track</span>
        </h1>
      </Link>

      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-xl hover:scale-110 transition-transform"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Optional user/logout */}
        {user && (
          <div className="flex items-center gap-2">
            <img
              src={user.photoURL || '/placeholder.svg'}
              alt="User"
              className="w-8 h-8 rounded-full object-cover border border-green-700"
            />
            <button onClick={handleLogout} className="w-full py-2 text-red-600">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default SidebarHeader;
