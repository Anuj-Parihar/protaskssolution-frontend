import React from "react";
import jack from "../assets/logos/jack.png";
import Edoardo from "../assets/logos/edu.png";
import Emily from "../assets/logos/emily.png";

const testimonials = [
  {
    name: "Jack Sannons",
    image: jack,
    feedback:
      "We have been consistently impressed with ProTasks Solution's ability to deliver high-quality work within tight deadlines. Their professionalism and expertise make them a trusted partner for our company.",
  },
  {
    name: "Emily Rose",
    image: Emily,
    feedback:
      "ProTasks Solution provided us with top-notch outsourcing services that have greatly enhanced our business processes. Their commitment to quality and customer satisfaction is truly commendable.",
  },
  {
    name: "Edoardo B.",
    image: Edoardo,
    feedback:
      "ProTasks is a great company to work with. They delivered our project with the highest quality and in a timely manner. Highly recommend ProTasks Solution for their exceptional service and professionalism.",
  },
];
const TestimonialsSection = () => {
  return (
    <section className="w-full bg-[#AAB4C3] pb-10">
      

    <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide relative inline-block">
            WHAT OUR CLIENTS SAY
            <span className="block w-16 h-1 bg-[#002147] mx-auto mt-2"></span>
        </h2>
    </div>

      {/* Testimonials Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-80 shadow-lg"
          >
            <p className="text-sm italic">"{testimonial.feedback}"</p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <h3 className="font-bold">{testimonial.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ClientTestimonials = () => {
  return (
    <>
      <TestimonialsSection />
      {/* <AppointmentSection /> */}
    </>
  );
};

export default ClientTestimonials;
