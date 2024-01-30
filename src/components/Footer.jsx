import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 max-w-[1640px] mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <img
          src="/gourmeta_logo.png"
          className="h-6 md:h-8 mb-8 md:mb-0"
          alt="Logo"
        />
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0">
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-6" />
      <span className="block text-sm text-gray-500 sm:text-center">
        &copy; {new Date().getFullYear()} Gourmeta. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
