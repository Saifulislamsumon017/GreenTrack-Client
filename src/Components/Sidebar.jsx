import React from 'react';
import { Link, NavLink } from 'react-router';
import { MdAddTask, MdOutlineEventAvailable } from 'react-icons/md';
import ImgLogo from '../Assests/GreenTrack Logo.webp';

const Sidebar = () => {
  return (
    <div className="hidden fixed md:block w-[300px] h-screen z-10 bg-white dark:bg-green-950 border-r border-gray-300 dark:border-white transition-all">
      {/* Logo & Heading */}
      <div className="flex items-center gap-3 px-6 pt-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={ImgLogo} alt="Logo" className="w-10 h-10" />
          <h1 className="font-Rancho text-3xl font-bold text-green-900 dark:text-white">
            GreenTrack
          </h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="pt-10 px-6 space-y-4">
        <NavLink
          to="/dashboard/add-plant"
          className={({ isActive }) =>
            `flex items-center gap-3 text-xl font-semibold px-4 py-3 rounded-2xl transition-all duration-200
             ${
               isActive
                 ? 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-white'
                 : 'text-green-900 dark:text-white hover:bg-green-50 dark:hover:bg-green-800'
             }`
          }
        >
          <MdAddTask className="text-2xl" />
          Add Plant
        </NavLink>

        <NavLink
          to="/dashboard/my-plants"
          className={({ isActive }) =>
            `flex items-center gap-3 text-xl font-semibold px-4 py-3 rounded-2xl transition-all duration-200
             ${
               isActive
                 ? 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-white'
                 : 'text-green-900 dark:text-white hover:bg-green-50 dark:hover:bg-green-800'
             }`
          }
        >
          <MdOutlineEventAvailable className="text-2xl" />
          My Plants
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
