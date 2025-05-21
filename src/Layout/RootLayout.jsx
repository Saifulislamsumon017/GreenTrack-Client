import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const RootLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="min-h-screen bg-white text-black dark:bg-green-950 dark:text-white transition-all">
        <Outlet />
      </main>
      <footer className="py-4 bg-white dark:bg-green-950 text-black dark:text-white">
        i am footer
      </footer>
    </>
  );
};

export default RootLayout;
