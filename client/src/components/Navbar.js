import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://cdn.kibrispdr.org/data/741/lizard-backgrounds-43.jpg"
            className="h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Lizard 2.0
          </span>
        </a>
        <div className="hidden md:block">
          <ul className="font-medium flex flex-row space-x-4">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="text-white bg-blue-700 rounded"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="text-white bg-blue-700 rounded"
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/client"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="text-white bg-blue-700 rounded"
              >
                Client
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
