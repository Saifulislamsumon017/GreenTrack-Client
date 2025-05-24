import React, { useState, useEffect, useContext } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import ImgLogo from '../Assests/GreenTrack Logo.png';
import { AuthContext } from '../Context/AuthContext';
import { Link, NavLink } from 'react-router';

const Header = () => {
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

  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/all-plants', label: 'All Plants' },
    { path: '/add-plant', label: 'Add Plant' },
    { path: '/my-plants', label: 'My Plants' },
  ];

  return (
    <header className="pt-4 bg-white dark:bg-green-950 text-black dark:text-white transition-all">
      <div className="w-11/12 mx-auto flex justify-between items-center py-4 px-4 lg:px-10 h-16 border border-black dark:border-white rounded-full">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={ImgLogo} alt="Logo" className="w-10 h-10" />
          <h1 className="font-Rancho text-3xl font-bold ml-2">
            Green<span className="text-green-900 dark:text-white">Track</span>
          </h1>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex space-x-5 text-xl font-Rancho">
            {menuItems.map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'px-6 py-2 border-2 border-green-900 dark:border-white rounded-full text-green-900 dark:text-white'
                      : 'text-black dark:text-white hover:text-green-700 dark:hover:text-green-300'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-xl hover:scale-110 transition-transform"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          {!user ? (
            <div className="hidden lg:flex gap-2">
              <Link
                to="/login"
                className="px-6 py-2 border-2 border-green-900 dark:border-white rounded-full hover:bg-green-900 dark:hover:bg-white hover:text-white dark:hover:text-green-900 transition-all font-Rancho"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="hidden lg:flex items-center space-x-3 relative group">
              <img
                src={user.photoURL || '/placeholder.svg'}
                alt={user.displayName || 'User'}
                className="w-10 h-10 rounded-full border border-green-700 object-cover cursor-pointer"
              />
              {/* Dropdown */}
              <div className="absolute right-0 mt-14 w-56 bg-white dark:bg-green-900 border border-gray-300 dark:border-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="p-4 border-b border-gray-200 dark:border-white">
                  <p className="text-sm font-semibold">
                    {user.displayName || 'User'}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">
                    {user.email}
                  </p>
                </div>
                <div className="p-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-950 rounded"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl ml-2"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 text-lg font-Rancho transition-all">
          {menuItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block py-2 border-b-2 border-green-900 dark:border-white text-green-900 dark:text-white'
                  : 'block py-2 border-b border-gray-300 dark:border-gray-700'
              }
            >
              {item.label}
            </NavLink>
          ))}

          {!user ? (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-green-900 dark:text-white border border-green-900 dark:border-white rounded text-center"
            >
              Login
            </Link>
          ) : (
            <div className="border-t border-gray-300 dark:border-white pt-4">
              <div className="mb-3 px-3">
                <p className="text-base font-semibold">
                  {user.displayName || 'User'}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                  {user.email}
                </p>
              </div>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full py-2 text-red-600 border border-red-600 rounded"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
