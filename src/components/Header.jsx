

// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-[#0B3159] shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex items-center text-xl font-bold text-white"
//           >
//             <img
//               src="https://tse2.mm.bing.net/th?id=OIP.P9WPxglozVLZsI2-dyXiTQHaDF&pid=Api&P=0&h=180"
//               alt="Logo"
//               className="h-8 w-8 mr-2"
//             />
//             ProTasks Solution
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             <Link
//               to="/"
//               className="text-[#E5A24A] hover:text-white transition duration-300"
//             >
//               Home
//             </Link>
//             <Link
//               to="/services"
//               className="text-[#E5A24A] hover:text-white transition duration-300"
//             >
//               Our Services
//             </Link>
//             <Link
//               to="/about"
//               className="text-[#E5A24A] hover:text-white transition duration-300"
//             >
//               About Us
//             </Link>
//             <Link
//               to="/contact"
//               className="text-[#E5A24A] hover:text-white transition duration-300"
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-[#E5A24A] focus:outline-none text-2xl"
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-[#0B3159] border-t border-[#E5A24A]">
//           <Link
//             to="/"
//             className="block px-6 py-3 text-[#E5A24A] hover:bg-[#E5A24A] hover:text-[#0B3159] transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/services"
//             className="block px-6 py-3 text-[#E5A24A] hover:bg-[#E5A24A] hover:text-[#0B3159] transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Our Services
//           </Link>
//           <Link
//             to="/about"
//             className="block px-6 py-3 text-[#E5A24A] hover:bg-[#E5A24A] hover:text-[#0B3159] transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             About Us
//           </Link>
//           <Link
//             to="/contact"
//             className="block px-6 py-3 text-[#E5A24A] hover:bg-[#E5A24A] hover:text-[#0B3159] transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;

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
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-xl font-bold text-[#0B3159]"
          >
            <img
              src={proTaskLogo}
              alt="Logo"
              className="h-8 w-8 mr-2"
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

