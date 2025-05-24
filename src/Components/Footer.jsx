import React from 'react';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ImgLogo from '../Assests/GreenTrack Logo.png';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-green-950 text-black dark:text-white pt-10 pb-6 transition-all">
      <div className="w-11/12 mx-auto rounded-3xl border border-black dark:border-white px-6 py-10 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          {/* Logo & Description */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center mb-4">
              <img src={ImgLogo} alt="Logo" className="w-10 h-10" />
              <h1 className="font-Rancho text-3xl font-bold ml-2">
                Green
                <span className="text-green-900 dark:text-white">Track</span>
              </h1>
            </Link>
            <p className="text-sm max-w-xs text-gray-600 dark:text-gray-300">
              A smarter way to care for your plants. Discover, grow, and track
              your greens with ease.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3 font-Rancho">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm font-Rancho">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-plants" className="hover:underline">
                  All Plants
                </Link>
              </li>
              <li>
                <Link to="/add-plant" className="hover:underline">
                  Add Plant
                </Link>
              </li>
              <li>
                <Link to="/my-plants" className="hover:underline">
                  My Plants
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-xl font-semibold mb-3 font-Rancho">
              Follow Us
            </h2>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 border-t border-black dark:border-white pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} GreenTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
