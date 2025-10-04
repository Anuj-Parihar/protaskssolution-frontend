
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "", captcha: "" });
//   const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
//   const [errorMessage, setErrorMessage] = useState("");

//   function generateCaptcha() {
//     return Math.random().toString(36).substring(2, 8).toUpperCase();
//   }

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.captcha !== captchaCode) {
//       setErrorMessage("Invalid CAPTCHA code");
//       setCaptchaCode(generateCaptcha());
//       return;
//     }
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/admin/login`,
//         { email: formData.email, password: formData.password }
//       );
//       if (response.status === 200) {
//         navigate("/admin-home");
//       }
//     } catch (error) {
//       setErrorMessage("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#0B3159]">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-semibold text-[#0B3159] text-center mb-6">Admin Login</h2>
//         {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
//           />
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               name="captcha"
//               placeholder="Enter CAPTCHA"
//               value={formData.captcha}
//               onChange={handleChange}
//               required
//               className="w-2/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
//             />
//             <span className="w-1/3 text-center font-bold text-[#E5A24A] bg-gray-200 p-3 rounded-lg">{captchaCode}</span>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#0B3159] text-white py-3 rounded-lg font-semibold hover:bg-[#4A1F75] transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "", captcha: "" });
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [errorMessage, setErrorMessage] = useState("");

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.captcha !== captchaCode) {
      setErrorMessage("Invalid CAPTCHA code");
      setCaptchaCode(generateCaptcha());
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/login`,
        { email: formData.email, password: formData.password }
      );

      if (response.status === 200) {
        localStorage.setItem("adminToken", response.data.token); // ✅ Save JWT token
        navigate("/admin-home");
      }
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B3159]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-[#0B3159] text-center mb-6">Admin Login</h2>
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
          />
          <div className="flex items-center space-x-4">
            <input
              type="text"
              name="captcha"
              placeholder="Enter CAPTCHA"
              value={formData.captcha}
              onChange={handleChange}
              required
              className="w-2/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
            />
            <span className="w-1/3 text-center font-bold text-[#E5A24A] bg-gray-200 p-3 rounded-lg">{captchaCode}</span>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0B3159] text-white py-3 rounded-lg font-semibold hover:bg-[#4A1F75] transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
