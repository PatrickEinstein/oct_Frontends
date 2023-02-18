import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  const MelodyImage = "/images/melody_ai_logo.png";
  return (
    <header className="h-20">
      <nav className="h-full">
        <div className="flex items-center h-full justify-between">
          <div>
            <Link to={"/"} className="flex items-center">
              <img
                src={MelodyImage}
                alt="Octave Logo"
                className="h-6 mr-3 sm:h-9"
              />
            </Link>
          </div>
          <div>
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none cursor-pointer">
                <AiOutlineSearch className="text-lg cursor-pointer" />
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 pl-10 text-sm text-gray-900  rounded-3xl bg-gray-100
                outline-none
                "
                placeholder="Search..."
              />
            </div>
          </div>
          <div>
            <AiOutlineMenu className="text-3xl" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
