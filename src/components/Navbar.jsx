import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    "Luggage",
    "Backpack",
    "Totes & Handbags",
    "Briefcase",
    "Travel Accessories",
  ];

  return (
    <nav className="bg-custom-darkblue shadow-xl px-5 md:px-28">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">

        <div className="flex flex-col items-center text-custom-white space-x-4">
          <img src="/images/Logo.png" alt="Logo" className="h-8" />
          <p className="uppercase text-custom-golden">Heart Hacker</p>
        </div>


        <div className="hidden md:flex flex-grow text-custom-white justify-center items-center space-x-8 text-gray-200 font-semibold">
          {menuItems.map((item) => (
            <div
              key={item}
              className="cursor-pointer hover:text-white transition"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Icons & About Us */}
        <div className=" flex md:flex-col flex-row  gap-2 justify-center items-center text-custom-white">
          <div className="hidden md:block text-md font-semibold text-gray-200 cursor-pointer hover:text-white transition">
            About us
          </div>

          <div className="flex  space-x-2 text-gray-200   ">
            <FaSearch className="text-xl hidden md:block lg:block cursor-pointer hover:text-white transition" />
            <FaUser className="text-xl hidden md:block lg:block cursor-pointer hover:text-white transition" />
            <FaShoppingCart className="text-xl hidden md:block lg:block cursor-pointer hover:text-white transition" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleMobileMenu} className="text-white md:hidden">
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl text-custom-white" />
            ) : (
              <FaBars className="text-2xl text-custom-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden  text-white px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <div
              key={item}
              className="text-sm text-custom-white font-semibold cursor-pointer hover:text-gray-300 transition"
            >
              {item}
            </div>
          ))}
          <div className="hidden md:block text-md font-semibold text-gray-200 cursor-pointer hover:text-white transition">
            About us
          </div>

          <div className="flex  space-x-2 text-gray-200   ">
            <FaSearch className="text-xl hidden md:block lg:block cursor-pointer hover:text-white transition" />
            <FaUser className="text-xl hidden md:block lg:block cursor-pointer hover:text-white transition" />
            <FaShoppingCart className="text-xl hidden md:block lg:block cursor-pointer hover:text-white transition" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
