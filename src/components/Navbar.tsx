import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi"; // Dropdown Icon

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Active dropdown state

  // Toggle Dropdown
  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        {/* Left Section: Logo and Search */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" alt="10 Minute School" className="h-8" />

          {/* Search Bar (Visible on Large Screens) */}
          <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Dropdown Links */}
          {[
            { title: "Class 6-12", hasDropdown: true },
            { title: "Skills", hasDropdown: true },
            { title: "Admission", hasDropdown: false },
            { title: "Online Batch", hasDropdown: true },
            { title: "English Center", hasDropdown: true },
            { title: "More", hasDropdown: true },
          ].map((menu) => (
            <div key={menu.title} className="relative">
              <button
                onClick={() => handleDropdownToggle(menu.title)}
                className="flex items-center text-gray-700 hover:text-green-500"
              >
                {menu.title} {menu.hasDropdown && <FiChevronDown className="ml-1" />}
              </button>
              {menu.hasDropdown && activeDropdown === menu.title && (
                <div className="absolute left-0 top-full bg-white shadow-lg rounded-md p-4 mt-1">
                  <ul className="space-y-2">
                    <li className="hover:text-green-500">Option 1</li>
                    <li className="hover:text-green-500">Option 2</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section: Icons and Login */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-green-500">🔍</button>
          <button className="text-gray-700 hover:text-green-500">📞</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            লগ-ইন
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 p-4">
            {[
              { title: "Class 6-12", hasDropdown: true },
              { title: "Skills", hasDropdown: true },
              { title: "Admission", hasDropdown: false },
              { title: "Online Batch", hasDropdown: true },
              { title: "English Center", hasDropdown: true },
              { title: "More", hasDropdown: true },
            ].map((menu) => (
              <li key={menu.title}>
                <div className="flex items-center justify-between">
                  <button
                    className="text-gray-700 hover:text-green-500 flex-grow text-left"
                    onClick={() => handleDropdownToggle(menu.title)}
                  >
                    {menu.title}
                  </button>
                  {menu.hasDropdown && (
                    <button
                      className="text-gray-700 hover:text-green-500"
                      onClick={() => handleDropdownToggle(menu.title)}
                    >
                      <FiChevronDown />
                    </button>
                  )}
                </div>
                {menu.hasDropdown && activeDropdown === menu.title && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li className="hover:text-green-500">Option 1</li>
                    <li className="hover:text-green-500">Option 2</li>
                  </ul>
                )}
              </li>
            ))}
            <li className="flex space-x-4">
              <button className="text-gray-700 hover:text-green-500">🔍</button>
              <button className="text-gray-700 hover:text-green-500">📞</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                লগ-ইন
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
