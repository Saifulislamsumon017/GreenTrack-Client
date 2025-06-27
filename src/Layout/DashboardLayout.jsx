import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../Components/Sidebar';
import SidebarHeader from '../Components/SidebarHeader';

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex bg-white dark:bg-green-950 text-black dark:text-white transition-colors duration-300">
      {/* Sidebar (Left Side) */}
      <Sidebar />

      {/* Main Content (Right Side) */}
      <div className="flex-1 md:ml-[300px] bg-white dark:bg-green-950">
        {/* Sticky Header inside dashboard */}
        <SidebarHeader />
        <div className="p-5">
          {/* Dynamic Routed Content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
