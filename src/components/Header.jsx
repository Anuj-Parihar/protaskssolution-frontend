import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import proTaskLogo from '../assets/logos/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#ffffff] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-xl font-bold text-[#0B3159]"
          >
            <img
              src={proTaskLogo}
              alt="Logo"
              className="h-13 w-15"
            />
            ProTasks Solution
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["/", "/services", "/about", "/contact"].map((path, idx) => {
              const labels = ["Home", "Our Services", "About Us", "Contact Us"];
              return (
                <Link
                  key={path}
                  to={path}
                  className={`transition duration-300 ${
                    isActive(path)
                      ? "text-[#0B3159] font-bold"
                      : "text-black  hover:text-[#0B3159]"
                  }`}
                >
                  {labels[idx]}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#000000] focus:outline-none text-2xl"
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#ffffff] border-t border-[#000000]">
          {["/", "/services", "/about", "/contact"].map((path, idx) => {
            const labels = ["Home", "Our Services", "About Us", "Contact Us"];
            return (
              <Link
                key={path}
                to={path}
                className={`block px-6 py-3 transition duration-300 ${
                  isActive(path)
                    ? "text-white bg-[#000000] font-semibold"
                    : "text-[#000000] hover:bg-[#E5A24A] hover:text-[#0B3159]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {labels[idx]}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Header;

