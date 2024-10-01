import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { FaSearch, FaShoppingCart, FaBuilding, FaTags, FaQuestionCircle, FaSignInAlt, FaBars } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(".nav-item", {
      opacity: 1,
      y: -20,
      duration: 7689,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <nav className="bg-orange-500 p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (full dark white) */}
        <div className="flex items-center">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
            alt="Swiggy"
            className="h-[4rem] w-auto filter brightness-0 invert"
          />
        </div>

        {/* Centered Navigation Links for larger screens (md and up) */}
        <div className="hidden md:flex space-x-8 items-center justify-center flex-grow">
          {/* Swiggy Corporate */}
          <a href="/corporate" className="nav-item text-white hover:text-gray-200 flex items-center space-x-2">
            <FaBuilding className="text-lg" />
            <span>Corporate</span>
          </a>

          {/* Offers */}
          <a href="/offers" className="nav-item text-white hover:text-gray-200 flex items-center space-x-2">
            <FaTags className="text-lg" />
            <span>Offers</span>
          </a>

          {/* Help */}
          <a href="/help" className="nav-item text-white hover:text-gray-200 flex items-center space-x-2">
            <FaQuestionCircle className="text-lg" />
            <span>Help</span>
          </a>

          {/* Sign In */}
          <a href="/signin" className="nav-item text-white hover:text-gray-200 flex items-center space-x-2">
            <FaSignInAlt className="text-lg" />
            <span>Sign In</span>
          </a>
        </div>

        {/* Right-side Search Bar and Cart for larger screens (md and up) */}
        <div className="md:flex space-x-15 items-center">
          {/* Search Icon */}
          <div className="flex items-center bg-white px-3 py-2 rounded-full">
            <FaSearch className="text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 outline-none text-gray-700"
            />
          </div>

          {/* Cart Icon */}
          <a href="/cart" className="relative text-white hover:text-gray-200 flex items-center space-x-2">
            <FaShoppingCart size={20} className="filter brightness-0 invert" />
            <span>Cart</span>
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">3</span>
          </a>
        </div>

        {/* Hamburger Menu Icon for small screens (visible below md) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu (visible on small screens when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-600 p-4">
          <a href="/corporate" className="block text-white py-2 hover:text-gray-200">
            Corporate
          </a>
          <a href="/offers" className="block text-white py-2 hover:text-gray-200">
            Offers
          </a>
          <a href="/help" className="block text-white py-2 hover:text-gray-200">
            Help
          </a>
          <a href="/signin" className="block text-white py-2 hover:text-gray-200">
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
