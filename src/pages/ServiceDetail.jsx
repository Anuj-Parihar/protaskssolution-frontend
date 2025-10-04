// import React from 'react';
// import { useParams } from 'react-router-dom';
// import serviceData from './Data.json'; // Adjust the path as needed
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const ServiceDetail = () => {
//   const { serviceKey } = useParams();
//   const service = serviceData[serviceKey];

//   if (!service) {
//     return <div className="text-center py-20 text-red-600 font-bold">Service not found!</div>;
//   }

//   const headingMap = {
//     BusinessDevelopment: "🌟 Business Development",
//     RecruitmentServices: "👥 Recruitment Process Outsourcing (RPO) Services",
//     EcommerceServices: "🛒 E-commerce Services",
//     VirtualAssistant: "🧑‍💻 Virtual Assistant Services",
//   };

//   return (
//     <>
//       <Header />
//       <section className="bg-white py-16 px-4 md:px-10">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#0B3159] mb-6 text-center">
//             {headingMap[serviceKey] || serviceKey.replace(/([A-Z])/g, ' $1').trim()}
//           </h2>

//           <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
//             {service.description}
//           </p>

//           <div className="mb-10">
//             <h3 className="text-xl font-semibold text-[#E5A24A] mb-4">Key Features</h3>
//             <ul className="list-disc pl-6 space-y-3 text-gray-800 text-base">
//               {service.features.map((feature, i) => (
//                 <li key={i}>{feature}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Animated Calendly Button */}
//           <div className="flex justify-center">
//             <a
//               href="https://calendly.com/nikhil-gehlot-protaskssolution/15min?month=2025-10"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#E5A24A] rounded-full shadow-md transition-all duration-300 hover:bg-[#d38b2b] hover:scale-105 animate-bounce"
//             >
//               📅 Book a Free Consultation
//             </a>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default ServiceDetail;
import React from "react";
import { useParams } from "react-router-dom";
import serviceData from "./Data.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServiceDetail = () => {
  const { serviceKey } = useParams();
  const service = serviceData[serviceKey];

  if (!service) {
    return (
      <div className="text-center py-20 text-red-600 font-bold">
        Service not found!
      </div>
    );
  }

  const headingMap = {
    BusinessDevelopment: "Business Development",
    RecruitmentServices: "Recruitment Process Outsourcing (RPO) Services",
  };

  return (
    <>
      <Header />
      <section className="bg-[#0B3159] py-20  px-4 sm:px-8 md:px-12">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Title */}
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white leading-snug">
            {headingMap[serviceKey] ||
              serviceKey.replace(/([A-Z])/g, " $1").trim()}
          </h2>

          {/* Description */}
          <p className="text-center max-w-3xl mx-auto text-white text-base sm:text-lg leading-relaxed">
            {service.description}
          </p>

          {/* Key Features */}
          <div className="bg-[#AAB4C3] rounded-xl p-6 sm:p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#000000] mb-5">
              Key Features
            </h3>
            <ul className="space-y-4 list-disc pl-5 sm:pl-6 text-black text-base sm:text-lg">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Calendly Button */}
          <div className="flex justify-center">
            <a
              href="https://calendly.com/nikhil-gehlot-protaskssolution/15min?month=2025-10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#ffffff] text-black text-lg font-semibold rounded-full shadow-lg hover:bg-[#000000] hover:text-[#ffffff] hover:scale-105 transition-transform duration-300 animate-bounce"
            >
              📅 Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServiceDetail;
