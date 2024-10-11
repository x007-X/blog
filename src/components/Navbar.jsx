import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-center items-center">
          <div className="flex items-center space-x-14">
            <Link 
              to="/myself"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-700 transition duration-200"
            >
              (🏎️) Me
            </Link>
            <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-700 transition duration-200">
              <Link to="/">[X]</Link>
            </h1>
            <Link 
              to="/blog"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-700 transition duration-200"
            >
              Blog (👨‍💻)
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
