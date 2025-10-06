
import React, { useState } from "react";
import nikhilPhoto from "..//assets/logos/NikhilPhoto.jpg"
import navedPhoto from "..//assets/logos/NavedPhoto.png"
import {
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Nikhil Gehlot",
    role: "Co-Founder",
    description:
      "With over 5+ years of experience, Nikhil co-founded ProTasks Solution to deliver innovative outsourcing solutions. His expertise is focused on improving operational efficiency, enhancing client productivity, and ensuring seamless service delivery.",
    image: nikhilPhoto,
    linkedin: "https://www.linkedin.com/in/nikhil-gehlot-171580202",
  },
  {
    name: "Naved Hasan",
    role: "Co-Founder",
    description:
      "Naved brings over 6+ years of experience in the Ecommerce and automobile industries. He focuses on strategic growth, process optimization, and expanding service offerings at ProTasks Solution.",
    image: navedPhoto,
    linkedin: "https://www.linkedin.com/in/naved-hasan-4b0b54170/",
  },
];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header />
      <section className="bg-[#0B3159] text-white pt-30 px-4 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Welcome at ProTasks Solution
            </h2>
            <div className="w-20 h-1 bg-white mb-6"></div>
            <p className="text-gray-200 leading-relaxed text-lg">
              At <strong>ProTasks Solution</strong>, we go beyond traditional
              outsourcing. We are a passionate team of experts dedicated to
              enhancing business operations through reliable and innovative
              solutions. Whether you’re a startup or an enterprise, we provide
              personalized services that prioritize your goals, timelines, and
              client satisfaction. With 24/7 support and a results-driven
              mindset, we help you scale efficiently and effectively.
              <br />
              <br />
              Partnering with ProTasks Solution means gaining a trusted
              extension of your team. We believe in transparency, excellence,
              and long-term partnerships. Let us handle the heavy lifting—so you
              can focus on growth.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://images.stockcake.com/public/2/e/3/2e329629-bbb8-4bde-8f56-7540238f7dd1_large/professional-business-meeting-stockcake.jpg"
              alt="Business Meeting"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#AAB4C3] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Business Team Meeting"
              className="rounded-xl shadow-lg w-full h-auto max-h-[400px] object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-black">
              Accelerate your business with us!
            </h2>
            <div className="w-20 h-1 bg-black mb-6"></div>
            <p className="text-black-200 leading-relaxed text-black md:text-lg">
              By partnering with <strong>ProTasks Solution</strong>, you gain
              more than just a corporate support system — you gain a friend, a
              motivator, a coach, and a trusted advisor. We stand by you every
              day to ensure your business thrives and reaches new heights.
              <br />
              <br />
              Our team is passionate about turning good into great and great
              into the best. With a focus on continuous growth and innovation,
              we empower you to achieve your business goals with confidence and
              clarity.
              <br />
              <br />
              Let's build something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3159] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold mb-4">
              How ProTasks Solution Started
            </h2>
            <div className="w-20 h-1 bg-white mb-6"></div>
            <p className="text-gray-200 leading-relaxed text-base md:text-lg">
              <strong>ProTasks Solution</strong> began with a simple yet
              powerful vision — to redefine outsourcing by blending efficiency
              with empathy. Our journey started when two professionals from
              diverse industries saw a common gap: businesses needed not just
              services, but reliable partners.
              <br />
              <br />
              Fueled by a passion for innovation and client success, we built
              ProTasks Solution to bridge that gap. Today, our story continues
              to evolve as we empower startups and enterprises with smart,
              scalable, and human-centered solutions.
            </p>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="How It Started"
              className="rounded-xl shadow-lg w-full h-auto max-h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-[#AAB4C3] min-h-screen flex flex-col justify-center items-center px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl mt-6 font-bold text-black uppercase tracking-wide">
            Meet Our Founders
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 max-w-5xl w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#30557D] text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full sm:w-90 flex flex-col"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold uppercase">
                    {member.name}
                  </h3>
                  <p className="text-white font-medium mt-2">{member.role}</p>
                  <div className="border-t border-gray-400 my-4"></div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <FaLinkedin className="text-white text-2xl hover:text-white transition duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-[#0B3159] text-white py-16 px-4 w-full">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center uppercase tracking-wide">
            Our Values
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mt-4 mb-10"></div>

          <div className="space-y-4">
            {/* Integrity */}
            <div className="bg-[#30557D] rounded-xl shadow-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-lg font-semibold hover:text-white">
                  <span>Integrity</span>
                  <svg
                    className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-200">
                  We uphold honesty, transparency, and trust in every client
                  interaction.
                </div>
              </details>
            </div>

            {/* Efficiency */}
            <div className="bg-[#30557D] rounded-xl shadow-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-lg font-semibold hover:text-white">
                  <span>Efficiency</span>
                  <svg
                    className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-200">
                  We optimize resources and streamline workflows to save time
                  and costs.
                </div>
              </details>
            </div>

            {/* Results-Oriented */}
            <div className="bg-[#30557D] rounded-xl shadow-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-lg font-semibold hover:text-white">
                  <span>Results-Oriented</span>
                  <svg
                    className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-200">
                  We measure success by the tangible outcomes and value we
                  deliver to our clients.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

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

export default About;
