
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Eye, EyeOff } from "lucide-react"; // Import icons
// import HeaderAdmin from "./HeaderAdmin";
// import Footer from "../components/Footer";

// const Settings = () => {
//   const [admin, setAdmin] = useState({ email: "", password: "" });
//   const [newPassword, setNewPassword] = useState("");
//   const [showOldPassword, setShowOldPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);

//   // Fetch current admin details
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/admin/current") // API to fetch current admin details
//       .then((res) => setAdmin(res.data))
//       .catch((err) => console.error("Error fetching admin details", err));
//   }, []);

//   // Handle password update
//   const handlePasswordUpdate = async (e) => {
//     e.preventDefault();
//     if (!newPassword) {
//       alert("Please enter a new password!");
//       return;
//     }

//     try {
//       const response = await axios.put("http://localhost:5000/api/admin/update-password", {
//         email: admin.email,
//         password: admin.password,
//         newPassword,
//       });

//       if (response.status === 200) {
//         alert("Password is updated.");
//         setNewPassword(""); // Reset new password field
//       }
//     } catch (error) {
//       console.error("Error updating password", error);
//       alert("Failed to update password. Try again!");
//     }
//   };

//   return (
//     <>
//       <HeaderAdmin />
//       <div className="max-w-2xl mx-auto my-1 p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-3xl font-semibold text-[#0B3159] text-center mb-6">
//           Change Password
//         </h2>
//         <form onSubmit={handlePasswordUpdate} className="space-y-4">
//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               value={admin.email}
//               disabled
//               className="w-full p-3 border rounded-lg bg-gray-100 text-gray-500"
//             />
//           </div>

//           {/* Current Password Field with Eye Icon */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               Current Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showOldPassword ? "text" : "password"}
//                 value={admin.password}
//                 disabled
//                 className="w-full p-3 border rounded-lg bg-gray-100 text-gray-500 pr-10"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowOldPassword(!showOldPassword)}
//                 className="absolute right-3 top-3 text-gray-500"
//               >
//                 {showOldPassword ? <Eye size={20} /> : <EyeOff size={20} />}
//               </button>
//             </div>
//           </div>

//           {/* New Password Field with Eye Icon */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               New Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showNewPassword ? "text" : "password"}
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3159] pr-10"
//                 placeholder="Enter new password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowNewPassword(!showNewPassword)}
//                 className="absolute right-3 top-3 text-gray-500"
//               >
//                 {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#E5A24A] text-white py-3 rounded-lg font-semibold hover:bg-[#0B3159] transition duration-300"
//           >
//             Update Password
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Settings;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import HeaderAdmin from "./HeaderAdmin";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const navigate = useNavigate();

  // Fetch current admin details
 useEffect(() => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    navigate("/admin-login");
    return;
  }

  axios
    .get(`${process.env.REACT_APP_API_URL}/admin/current`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => setAdmin(res.data))
    .catch((err) => {
      console.error("Error fetching admin details", err);
      if (err.response?.status === 401) navigate("/admin-login");
    });
}, [navigate]);

const handlePasswordUpdate = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem("adminToken");

  if (!newPassword) {
    alert("Please enter a new password!");
    return;
  }

  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/admin/update-password`,
      { newPassword },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.status === 200) {
      alert("Password is updated.");
      setNewPassword("");
    }
  } catch (error) {
    console.error("Error updating password:", error);
    if (error.response?.status === 401) navigate("/admin-login");
    alert("Failed to update password. Try again!");
  }
};


  return (
    <>
      <HeaderAdmin />
      <div className="max-w-2xl mx-auto my-1 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-[#0B3159] text-center mb-6">
          Change Password
        </h2>
        <form onSubmit={handlePasswordUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={admin.email}
              disabled
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-500"
            />
          </div>

          {/* Current Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showOldPassword ? "text" : "password"}
                value={admin.password}
                disabled
                className="w-full p-3 border rounded-lg bg-gray-100 text-gray-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showOldPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3159] pr-10"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#E5A24A] text-white py-3 rounded-lg font-semibold hover:bg-[#0B3159] transition duration-300"
          >
            Update Password
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
