import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaMailBulk } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* nav bar start ********************************************/}
      <nav className="z-10 bg-white fixed w-full top-0 start-0">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/assets/AG.png" className="size-10 w-14 h-14 ml-6" alt="logo" />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-black">
              Portfolio
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`md:block w-full md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <Link
                  onClick={toggleMenu}
                  to="/"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-all duration-300 ease-in-out text-black hover:text-blue-500 ${window.location.pathname === "/" ? 'text-blue-700' : ''}`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  to="/about"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-all duration-300 ease-in-out text-black hover:text-blue-500 ${window.location.pathname === "/about" ? 'text-blue-700' : ''}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  to="/projects"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-all duration-300 ease-in-out text-black hover:text-blue-500 ${window.location.pathname === "/projects" ? 'text-blue-700' : ''}`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  to="/contact"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-all duration-300 ease-in-out text-black hover:text-blue-500 ${window.location.pathname === "/contact" ? 'text-blue-700' : ''}`}
                >
                  Contact
                </Link>
              </li>
              <div className="flex items-center justify-center gap-8 text-2xl">
                <div>
                  <a href="https://www.linkedin.com/in/abhinav-gumpu-8bb29322a/">
                    <FaLinkedin />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/AbhiJay1287">
                    <FaGithub />
                  </a>
                </div>
                <div>
                  <a href="">
                    <FaInstagram />
                  </a>
                </div>
                <div>
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                    <FaMailBulk />
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* nav bar end **********************************************/}
    </div>
  );
}
