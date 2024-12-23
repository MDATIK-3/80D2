import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "HOME", path: "/home" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "RESOURCES", path: "/resources" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 sticky top-0 text-gray-400 h-[70px] px-[10%] flex z-[100] items-center justify-around">
      
      <div className="flex items-center">
        <img src="/logo.png" alt="TDHH Logo" className="h-[50px]" />
      </div>

      <div className="hidden md:flex space-x-6 flex-1 justify-center">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `hover:text-gray-200 ${isActive ? "text-white" : ""}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>


      <button
        className="md:hidden text-gray-400 focus:outline-none"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-gray-900 text-center flex flex-col space-y-4 py-4 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-gray-200 ${isActive ? "text-white" : ""}`
              }
              onClick={() => setIsMobileMenuOpen(false)} 
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/talk"
            className="bg-[--btn-bg] hover:bg-green-600 text-white  py-2 rounded"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            LET'S TALK
          </NavLink>
        </div>
      )}

      <div className="hidden md:block">
        <NavLink
          to="/talk"
          className="bg-[--btn-bg] hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          LET'S TALK
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
