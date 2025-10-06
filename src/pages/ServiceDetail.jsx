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
