import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import NavButton from "./NavButton";
import OctaveLogo from "./../../assets/images/OctaveLogo.png";
const Navbar = () => {
    const [navIsOpen, setNavIsOpen] = useState(false);
    return (<nav className="h-16 flex fixed w-screen top-0 left-0 items-center justify-between px-4 bg-transparent">
      <Link to="/">
        <img src={OctaveLogo} alt="Octave Incorporations"/>
      </Link>
      <form action="" className="hidden md:flex items-center bg-white rounded-3xl pl-2 pr-4 shadow-2xl gap-2 h-8">
        <button>
          {/* <AiOutlineSearch /> */}
        </button>
        <input type="text" className="outline-none flex-1 bg-transparent" placeholder="Search..."/>
      </form>
      <div className="lg:hidden cursor-pointer p-2" onClick={() => {
            setNavIsOpen(!navIsOpen);
        }}>
        {/* <AiOutlineMenu /> */}
      </div>
      <div className={`w-screen fixed top-16 left-0 py-8 flex items-center justify-center gap-8 flex-col bg-primary text-white lg:items-center lg:gap-4 lg:static lg:w-fit lg:text-black lg:bg-transparent lg:flex-row`}>
        <ul className="flex flex-col gap-8 lg:flex-row lg:gap-2">
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
        <ul className="flex flex-col gap-8 lg:flex-row lg:gap-2">
          <li>
            <NavButton to="/signin" text="Sign In" type={"secondary"}/>
          </li>
          <li>
            <NavButton to="/signup" text="Sign Up" type={navIsOpen ? "secondary" : "primary"}/>
          </li>
        </ul>
      </div>
    </nav>);
};
export default Navbar;
