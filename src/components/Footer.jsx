// import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0B0F1A] text-white py-10 px-5">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
//         {/* About Us Section */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#ffffff] border-l-2 border-[#ffffff] pl-2">
//             ABOUT US
//           </h3>
//           <p className="mt-4 text-gray-400">
//             Our trusted team delivers innovative solutions, empowering
//             businesses to achieve new heights.
//           </p>
//           <p className="mt-2 text-gray-400">
//             Partner with us for sustainable growth and a brighter future.
//           </p>
//         </div>

//         {/* Our Services Section */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#ffffff] border-l-2 border-[#ffffff] pl-2">
//             OUR SERVICES
//           </h3>
//           <ul className="mt-4 space-y-2 text-gray-400">
//             <li>○ Business Process Services</li>
//             <li>○ Recruitment Services</li>

//           </ul>
//         </div>

//         {/* Contact Info Section */}

//         <div>
//           <h3 className="text-lg font-semibold text-[#ffffff] border-l-2 border-[#ffffff] pl-2">
//             CONTACT INFO
//           </h3>
//           <div className="mt-4 space-y-3 text-gray-400">
//             <p className="flex items-center gap-2">
//               <FaMapMarkerAlt className="text-[#ffffff]" />
//               <span>
//                 <strong>Address:</strong>{" "}
//                 <a
//                   href="https://www.google.com/maps/place/E-96,+Road+No-1,+MIA+Udaipur,+Rajasthan-313003"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:underline text-white"
//                 >
//                   E-96, Road No-1, MIA Udaipur, Rajasthan-313003
//                 </a>
//               </span>
//             </p>
//             <p className="flex items-center gap-2">
//               <FaPhoneAlt className="text-[#ffffff]" />
//               <span>
//                 <strong>Phone:</strong>{" "}
//                 <a
//                   href="tel:+919414136598"
//                   className="hover:underline text-white"
//                 >
//                   +91 9414136598
//                 </a>
//                 ,{" "}
//                 <a
//                   href="tel:+919116007738"
//                   className="hover:underline text-white"
//                 >
//                   +91 9116007738
//                 </a>
//               </span>
//             </p>
//             <p className="flex items-center gap-2">
//               <FaEnvelope className="text-[#ffffff]" />
//               <span>
//                 <strong>Email:</strong>{" "}
//                 <a
//                   href="mailto:info@protaskssolution.com"
//                   className="hover:underline text-white"
//                 >
//                   info@protaskssolution.com
//                 </a>
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Follow Us Section */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#ffffff] border-l-2 border-[#ffffff] pl-2">
//             FOLLOW US
//           </h3>
//           <div className="flex space-x-4 mt-4">
//             <a href="#" className="text-gray-400 hover:text-[#E5A24A]">
//               <FaFacebookF size={18} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-[#E5A24A]">
//               <FaInstagram size={18} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-[#E5A24A]">
//               <FaLinkedinIn size={18} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="text-center text-gray-500 text-sm mt-8">
//         © COPYRIGHT 2024 - PROTASKS SOLUTION
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F1A] text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffffff] border-l-2 border-[#ffffff] pl-2">
            ABOUT US
          </h3>
          <p className="mt-4 text-gray-400">
            Our trusted team delivers innovative solutions, empowering
            businesses to achieve new heights.
          </p>
          <p className="mt-2 text-gray-400">
            Partner with us for sustainable growth and a brighter future.
          </p>
        </div>

        {/* Our Services Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffffff] border-l-2 border-[#ffffff] pl-2">
            OUR SERVICES
          </h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <Link
                to="/service/BusinessDevelopment"
                className="hover:underline text-white"
              >
                Business Development
              </Link>
            </li>
            <li>
              <Link
                to="/service/RecruitmentServices"
                className="hover:underline text-white"
              >
                Recruitment Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffffff] border-l-2 border-[#ffffff] pl-2">
            CONTACT INFO
          </h3>
          <div className="mt-4 space-y-3 text-gray-400">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#ffffff]" />
              <span>
                <strong>Address:</strong>{" "}
                <a
                  href="https://www.google.com/maps/place/E-96,+Road+No-1,+MIA+Udaipur,+Rajasthan-313003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  E-96, Road No-1, MIA Udaipur, Rajasthan-313003
                </a>
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#ffffff]" />
              <span>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919414136598"
                  className="hover:underline text-white"
                >
                  +91 9414136598
                </a>
                ,{" "}
                <a
                  href="tel:+919116007738"
                  className="hover:underline text-white"
                >
                  +91 9116007738
                </a>
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#ffffff]" />
              <span>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@protaskssolution.com"
                  className="hover:underline text-white"
                >
                  info@protaskssolution.com
                </a>
              </span>
            </p>
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffffff] border-l-2 border-[#ffffff] pl-2">
            FOLLOW US
          </h3>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/people/ProTasks-Solution/61570057199066/"
              className="text-gray-400 hover:text-[#E5A24A]"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.instagram.com/protaskssolution/"
              className="text-gray-400 hover:text-[#E5A24A]"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/protasks-solution/"
              className="text-gray-400 hover:text-[#E5A24A]"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © COPYRIGHT 2024 - PROTASKS SOLUTION
      </div>
    </footer>
  );
};

export default Footer;


