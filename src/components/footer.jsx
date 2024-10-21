import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronUp } from 'react-icons/fa'; // Importing the up arrow icon

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  };

  return (
    <div
      className={`rounded-sm shadow bg-white relative ${
        window.location.pathname === '/admin' || window.location.pathname === '/' ? '' : 'mt-0'
      } min-h-[55px] flex items-center justify-center`}
    >
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className=" sm:text-center text-black ml-2 ">
          © {year + ' '} Portfolio™ Abhinav All Copy Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3  font-medium text-black sm:mt-0">
          <li>
            <Link to="/about" className="hover:underline me-4 md:me-6 text-black">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline me-4 md:me-6 text-black">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/admin" className="hover:underline me-4 md:me-6 text-black">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline text-black">
              Contact
            </Link>
          </li>
        </ul>
        {/* Go to Top Button */}
        <button
          onClick={scrollToTop}
          className="ml-2 p-2 rounded text-black bg-gray-300 transition duration-200 flex items-center gap-4"
          aria-label="Scroll to top"
        >
          <FaChevronUp />
          
        </button>
      </div>
    </div>
  );
}
