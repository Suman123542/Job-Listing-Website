import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-medium"
      : "text-gray-600 hover:text-black";

  return (
    <nav className="w-full bg-white border-b shadow-sm fixed top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      
        <span className="text-lg font-bold text-blue-600">
          JobSeekerr.
        </span>

      
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/jobs" className={linkClass}>Find Jobs</NavLink></li>
          <li><NavLink to="/companies" className={linkClass}>Companies</NavLink></li>
          <li><NavLink to="/blog" className={linkClass}>Blog</NavLink></li>
        </ul>

      
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

  
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>Home</NavLink>
            <NavLink to="/jobs" onClick={() => setIsOpen(false)} className={linkClass}>Find Jobs</NavLink>
            <NavLink to="/companies" onClick={() => setIsOpen(false)} className={linkClass}>Companies</NavLink>
            <NavLink to="/blog" onClick={() => setIsOpen(false)} className={linkClass}>Blog</NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;