import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer';

const RootLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="min-h-screen bg-white text-black dark:bg-green-950 dark:text-white transition-all">
        <Outlet />
        <ToastContainer position="top-right" autoClose={3000} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
