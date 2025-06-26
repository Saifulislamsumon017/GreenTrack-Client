import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  return (
    <>
      {/* Fixed Header */}
      <header>
        <Header />
      </header>

      {/* Main content area with top padding to avoid overlap with fixed header */}
      <main className="pt-24 min-h-screen bg-white text-black dark:bg-green-950 dark:text-white transition-all">
        <Outlet />
        <ToastContainer position="top-right" autoClose={3000} />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
