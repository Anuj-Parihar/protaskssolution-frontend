
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    service: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedStateCode, setSelectedStateCode] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  
  const API_KEY = process.env.REACT_APP_LOCATION_API_KEY;
  useEffect(() => {
    axios
      .get("https://api.countrystatecity.in/v1/countries", {
        headers: { "X-CSCAPI-KEY": API_KEY },
      })
      .then((res) => setCountries(res.data))
      .catch((err) => console.error("Error loading countries", err));
  }, [API_KEY]);

  useEffect(() => {
    if (selectedCountryCode) {
      axios
        .get(
          `https://api.countrystatecity.in/v1/countries/${selectedCountryCode}/states`,
          {
            headers: { "X-CSCAPI-KEY": API_KEY },
          }
        )
        .then((res) => setStates(res.data))
        .catch((err) => console.error("Error loading states", err));
    } else {
      setStates([]);
    }
    setSelectedStateCode("");
    setCities([]);
    setFormData((prev) => ({ ...prev, state: "", city: "" }));
  }, [selectedCountryCode, API_KEY]);

  useEffect(() => {
    if (selectedCountryCode && selectedStateCode) {
      axios
        .get(
          `https://api.countrystatecity.in/v1/countries/${selectedCountryCode}/states/${selectedStateCode}/cities`,
          {
            headers: { "X-CSCAPI-KEY": API_KEY },
          }
        )
        .then((res) => setCities(res.data))
        .catch((err) => console.error("Error loading cities", err));
    } else {
      setCities([]);
    }
    setFormData((prev) => ({ ...prev, city: "" }));
  }, [selectedCountryCode, selectedStateCode, API_KEY]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e) => {
    const code = e.target.value;
    setSelectedCountryCode(code);
    const countryObj = countries.find((c) => c.iso2 === code);
    setFormData((prev) => ({ ...prev, country: countryObj?.name || "" }));
  };

  const handleStateChange = (e) => {
    const code = e.target.value;
    setSelectedStateCode(code);
    const stateObj = states.find((s) => s.iso2 === code);
    setFormData((prev) => ({ ...prev, state: stateObj?.name || "" }));
  };

  const handleCityChange = (e) => {
    const name = e.target.value;
    setFormData((prev) => ({ ...prev, city: name }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://protaskssolution-backend.onrender.com/api/contact",
        formData
      );
      if (res.status === 201) {
        setSuccessMessage("Response submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          state: "",
          city: "",
          service: "",
          message: "",
        });
        setSelectedCountryCode("");
        setSelectedStateCode("");
        setTimeout(() => setSuccessMessage(""), 5000);
      }
    } catch (err) {
      console.error("Submission error", err);
      alert("Error submitting form");
    }
  };

  return (
    <>
      <Header />
      <section className="bg-[#0B3159] py-20 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-[#ffffff] mx-auto mt-2"></div>
          <h2 className="text-3xl md:text-3xl font-semibold text-white pt-10">
            Let’s discuss how we can help grow your business through smart
            outsourcing.
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            {successMessage && (
              <p className="text-green-600 text-center mb-4">
                {successMessage}
              </p>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select
                  value={selectedCountryCode}
                  onChange={handleCountryChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
                >
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c.iso2} value={c.iso2}>
                      {c.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedStateCode}
                  onChange={handleStateChange}
                  required
                  disabled={!states.length}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
                >
                  <option value="">Select State</option>
                  {states.map((s) => (
                    <option key={s.iso2} value={s.iso2}>
                      {s.name}
                    </option>
                  ))}
                </select>

                <select
                  value={formData.city}
                  onChange={handleCityChange}
                  required
                  disabled={!cities.length}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
                >
                  <option value="">Select City</option>
                  {cities.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
              >
                <option value="">Select Service</option>
                <option value="business-development">
                  Business Development
                </option>
                <option value="recruitment">Recruitment Services</option>
              </select>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-28 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#0B3159] text-white py-3 rounded-lg font-semibold hover:bg-[#4A1F75] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info with Clickable Links */}
          <div className="space-y-6">
            <a
              href="tel:+919414136598"
              className="flex items-start space-x-4 bg-white p-6 py-10 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <FaPhoneAlt className="text-[#0B3159] text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p>+91 9414136598</p>
                <p>+91 9116007738</p>
              </div>
            </a>

            <a
              href="mailto:info@protaskssolution.com"
              className="flex items-start space-x-4 bg-white p-6 py-10 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <FaEnvelope className="text-[#0B3159] text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Message</h3>
                <p>info@protaskssolution.com</p>
              </div>
            </a>

            <a
              href="https://www.google.com/maps?q=E-96,+Road+No-1+MIA+Madri,+Riico+Near+BMW+Showroom+Udaipur,+Rajasthan+313001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-4 bg-white p-6 py-10 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <FaMapMarkerAlt className="text-[#0B3159] text-3xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Our Location</h3>
                <p>
                  E-96, Road No-1 MIA Madri, Riico Near BMW Showroom
                  <br /> Udaipur, Rajasthan 313001
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="max-w-7xl my-12 mx-auto">
          <iframe
            title="Google Map"
            className="w-full h-96 rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.402023134175!2d73.74652997565573!3d24.575318178116518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e8aadf75bad9%3A0xb153620439a53b6c!2sEqra%20International!5e0!3m2!1sen!2sin!4v1740311752139!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
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

export default ContactUs;

