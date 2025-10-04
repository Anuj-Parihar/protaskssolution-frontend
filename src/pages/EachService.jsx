// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import data from '../pages/Data.json';

// const EachService = () => {
//   const { serviceKey } = useParams();
//   const [service, setService] = useState(null);

//   useEffect(() => {
//     if (data[serviceKey]) {
//       setService(data[serviceKey]);
//     }
//   }, [serviceKey]);

//   if (!service) {
//     return <div className="text-center text-white text-2xl py-20">Service not found</div>;
//   }

//   const images = {
//     RecruitmentServices: "https://protaskssolution.com/wp-content/uploads/2022/04/Rec5.jpg",
//     BusinessDevelopment: "https://protaskssolution.com/wp-content/uploads/2022/04/BD1.jpg",
//     EcommerceServices: "https://protaskssolution.com/wp-content/uploads/2024/11/Ecomm-23-1.jpg",
//     VirtualAssistant: "https://protaskssolution.com/wp-content/uploads/2022/04/VA2.jpg",
//   };

//   return (
//     <>
//       <Header />
//       <div className="py-18 relative">
//         <img src={images[serviceKey]} alt={serviceKey} className="w-full h-64 object-cover" />
//         <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
//           <h1 className="text-white text-4xl font-bold uppercase">{serviceKey.replace(/([A-Z])/g, ' $1').trim()}</h1>
//         </div>
//       </div>

//       <section className="max-w-7xl mx-auto p-6 text-gray-800">
//         <p className="text-lg mb-6">{service.description}</p>
//         <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
//         <ul className="list-disc list-inside space-y-2">
//           {service.features.map((feature, index) => (
//             <li key={index} className="text-lg">{feature}</li>
//           ))}
//         </ul>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default EachService;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import data from '../pages/Data.json';

const EachService = () => {
  const { serviceKey } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    if (data[serviceKey]) {
      setService(data[serviceKey]);
    }
  }, [serviceKey]);

  if (!service) {
    return <div className="text-center text-[#0B3159] text-2xl py-20 font-semibold">Service not found</div>;
  }

  const images = {
    RecruitmentServices: "https://protaskssolution.com/wp-content/uploads/2022/04/Rec5.jpg",
    BusinessDevelopment: "https://protaskssolution.com/wp-content/uploads/2022/04/BD1.jpg",
    EcommerceServices: "https://protaskssolution.com/wp-content/uploads/2024/11/Ecomm-23-1.jpg",
    VirtualAssistant: "https://protaskssolution.com/wp-content/uploads/2022/04/VA2.jpg",
  };

  return (
    <>
      <Header />
      <div className="relative w-full h-80 md:h-96 lg:h-[400px]">
        <img 
          src={images[serviceKey]} 
          alt={serviceKey} 
          className="w-full h-full object-cover brightness-75" 
        />
        <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
          <h1 className="text-white text-3xl md:text-5xl font-bold uppercase text-center">
            {serviceKey.replace(/([A-Z])/g, ' $1').trim()}
          </h1>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
        <p className="text-lg text-[#0B3159] font-medium mb-6 leading-relaxed">{service.description}</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0B3159] mb-4 border-b-4 border-[#0B3159] pb-2 inline-block">Key Features:</h2>
        <ul className="list-disc list-inside space-y-3 text-[#0B3159] text-lg md:text-xl">
          {service.features.map((feature, index) => (
            <li key={index} className="bg-white p-3 rounded-lg shadow-md">{feature}</li>
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default EachService;
