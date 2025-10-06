import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentSection from "../components/AppointmentSection";
import BusinessDevelopment from "../assets/logos/BusinessDevelopment.jpeg";
import RecruitmentServices from "../assets/logos/RecruitmentServices1.jpg";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

const services = [
  {
    title: "Business Development",
    key: "BusinessDevelopment",
    image: BusinessDevelopment,
  },
  {
    title: "Recruitment Services",
    key: "RecruitmentServices",
    image: RecruitmentServices,
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [counters, setCounters] = useState({
    leads: 0,
    clients: 0,
    savings: 0,
    successRate: 0,
  });

  useEffect(() => {
    const targets = { leads: 10000, clients: 15, savings: 70, successRate: 95 };
    const speed = 80;

    const interval = setInterval(() => {
      setCounters((prev) => ({
        leads: Math.min(prev.leads + 250, targets.leads),
        clients: Math.min(prev.clients + 1, targets.clients),
        savings: Math.min(prev.savings + 2, targets.savings),
        successRate: Math.min(prev.successRate + 3, targets.successRate),
      }));
      if (
        counters.leads >= targets.leads &&
        counters.clients >= targets.clients &&
        counters.savings >= targets.savings &&
        counters.successRate >= targets.successRate
      ) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [counters]);

  return (
    <>
      <Header />
      <section className="bg-[#0B3159] py-20 px-4 md:px-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-[#ffffff] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-[1.03] group cursor-pointer w-full max-w-sm"
              onClick={() => navigate(`/service/${service.key}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center bg-white">
                <h3 className="text-lg md:text-xl font-semibold text-[#0B3159] uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-wrap justify-center gap-10  text-white text-center bg-[#3A5F91]  py-6">
          {[
            {
              count: counters.leads.toLocaleString(),
              label: "LEADS GENERATED",
            },
            { count: counters.clients, label: "HAPPY CLIENTS" },
            { count: `${counters.savings}%`, label: "SAVE UPTO" },
            { count: `${counters.successRate}%`, label: "SUCCESS RATE" },
          ].map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold">{stat.count}+</h3>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <AppointmentSection />
      <Footer />

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {isOpen && (
          <div className="flex flex-col items-end gap-3">
            <a
              href="https://wa.me/+919414136598"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="mailto:mailto:nikhil.gehlot@protaskssolution.com"
              className="bg-blue-500 p-3 rounded-full text-white shadow-lg hover:bg-blue-600 transition"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="tel:+919414136598"
              className="bg-red-500 p-3 rounded-full text-white shadow-lg hover:bg-red-600 transition"
            >
              <FaPhone size={20} />
            </a>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#002147] text-white p-4 rounded-full shadow-lg hover:bg-[#00172f] transition"
        >
          {isOpen ? <FaTimes size={20} /> : <FaPlus size={20} />}
        </button>
      </div>
    </>
  );
};

export default Services;

