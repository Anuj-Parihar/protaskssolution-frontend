// import {React, useState} from 'react';
// import {Link} from "react-router-dom";
// const HeaderAdmin = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//       <nav className="bg-[#0B3159] shadow-md fixed w-full z-50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="flex justify-between items-center py-4">
//             {/* Logo */}
//             <Link
//               to="/admin-home"
//               className="flex items-center text-xl font-bold text-white"
//             >
//               <img
//                 src="https://tse2.mm.bing.net/th?id=OIP.P9WPxglozVLZsI2-dyXiTQHaDF&pid=Api&P=0&h=180"
//                 alt="Logo"
//                 className="h-8 w-8 mr-2"
//               />
//               ProTasks Solution
//             </Link>
  
//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-8">
//               <Link
//                 to="/admin-home"
//                 className="text-[#E5A24A] hover:text-white transition duration-300"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/response"
//                 className="text-[#E5A24A] hover:text-white transition duration-300"
//               >
//                 Responses
//               </Link>
//               <Link
//                 to="/admin-settings"
//                 className="text-[#E5A24A] hover:text-white transition duration-300"
//               >
//                 Settings 
//               </Link>
//             </div>
  
//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden text-[#E5A24A] focus:outline-none text-2xl"
//             >
//               {isOpen ? "✖" : "☰"}
//             </button>
//           </div>
//         </div>
  
//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-[#0B3159] border-t border-[#E5A24A]">
//             <Link
//               to="/admin-home"
//               className="block px-6 py-3 text-[#E5A24A] hover:bg-[#E5A24A] hover:text-[#0B3159] transition duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/response"
//               className="block px-6 py-3 text-[#E5A24A] hover:bg-[#E5A24A] hover:text-[#0B3159] transition duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               Responses
//             </Link>
//             <Link
//               to="/admin-home"
//               className="block px-6 py-3 text-[#E5A24A] hover:bg-[#E5A24A] hover:text-[#0B3159] transition duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               Settings
//             </Link>
//           </div>
//         )}
//       </nav>
//     );
// }

// export default HeaderAdmin


import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#0B3159] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/admin-home"
            className="flex items-center text-xl font-bold text-white"
          >
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.P9WPxglozVLZsI2-dyXiTQHaDF&pid=Api&P=0&h=180"
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            ProTasks Solution
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["/admin-home", "/response", "/admin-settings"].map((path, idx) => {
              const labels = ["Home", "Responses", "Settings"];
              return (
                <Link
                  key={path}
                  to={path}
                  className={`transition duration-300 ${
                    isActive(path)
                      ? "text-white font-semibold"
                      : "text-[#E5A24A] hover:text-white"
                  }`}
                >
                  {labels[idx]}
                </Link>
              );
            })}
          </div>
          <button
                onClick={() => {
                  localStorage.removeItem("adminToken");
                  window.location.href = "/admin-login";
                }}
                className="text-[#E5A24A] hover:text-white transition duration-300">
                Logout
          </button>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#E5A24A] focus:outline-none text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B3159] border-t border-[#E5A24A]">
          {["/admin-home", "/response", "/admin-settings"].map((path, idx) => {
            const labels = ["Home", "Responses", "Settings"];
            return (
              <Link
                key={path}
                to={path}
                className={`block px-6 py-3 transition duration-300 ${
                  isActive(path)
                    ? "text-white bg-[#E5A24A] font-semibold"
                    : "text-[#E5A24A] hover:bg-[#E5A24A] hover:text-[#0B3159]"
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

export default HeaderAdmin;

