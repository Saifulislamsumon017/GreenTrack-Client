import React from 'react';

const Neawlater = () => {
  return (
    <div className="py-10 bg-white dark:bg-green-950 text-black dark:text-white transition">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x md:divide-gray-300 dark:md:divide-white/20">
        {/* Contact Info */}
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4 text-gray-700 dark:text-white/70">
            Fill in the form to start a conversation
          </p>
          <div className="space-y-4 text-gray-700 dark:text-white/70">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-3"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Fake address, 9999 City
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-3"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              123456789
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-3"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              contact@business.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="block w-full rounded-md shadow-sm border border-gray-300 dark:border-white bg-white dark:bg-green-900 text-black dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="block w-full rounded-md shadow-sm border border-gray-300 dark:border-white bg-white dark:bg-green-900 text-black dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              placeholder="Write your message here..."
              className="block w-full rounded-md shadow-sm border border-gray-300 dark:border-white bg-white dark:bg-green-900 text-black dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </label>
          <button
            type="submit"
            className="self-center px-8 py-3 text-lg font-semibold rounded-full bg-green-900 text-white hover:bg-green-800 transition dark:bg-white dark:text-green-950 dark:hover:bg-green-100"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Neawlater;
