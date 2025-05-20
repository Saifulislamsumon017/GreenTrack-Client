import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className="min-h-[calc(100vh-150px)]">
        <Outlet />
        <ToastContainer />
      </main>
      <footer>i am footer</footer>
    </>
  );
};

export default RootLayout;
