import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <nav className="h-16 flex  items-center justify-between px-4">
      <Link to="/">Octave Logo</Link>
      <form
        action=""
        className="hidden lg:flex items-center bg-white rounded-3xl pl-2 pr-4 shadow-2xl gap-2 h-8"
      >
        <button>
          <AiOutlineSearch />
        </button>
        <input
          type="text"
          className="outline-none flex-1 bg-transparent"
          placeholder="Search..."
        />
      </form>
      <div className="lg:flex lg:items-center lg:gap-4">
        <ul className="lg:flex lg:gap-2 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/course">Course</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
        <ul className="lg:flex lg:gap-2">
          <li>
            <NavButton to="/signin" text="Sign In" type={"secondary"} />
          </li>
          <li>
            <NavButton to="/signup" text="Sign Up" type="primary" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
