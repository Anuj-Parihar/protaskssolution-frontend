
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import HeaderAdmin from "./HeaderAdmin";
// import Footer from "../components/Footer";

// const AdminHome = () => {
//   const [responses, setResponses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/contact")
//       .then((res) => {
//         const sorted = res.data.sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );
//         setResponses(sorted.slice(0, 5));
//       })
//       .catch((err) => console.error("Error fetching responses", err));
//   }, []);

//   return (
//     <>
//       <HeaderAdmin />
//       <div className="max-w-7xl mx-auto p-6">
//         <h2 className="text-3xl font-semibold text-[#0B3159] text-center mb-6">
//           Admin Dashboard
//         </h2>
//         <h3 className="text-2xl font-semibold text-[#0B3159] mb-4">
//           Top Responses
//         </h3>

//         {/* TABLE FOR DESKTOP */}
//         <div className="hidden md:block overflow-x-auto">
//           <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
//             <thead className="bg-[#0B3159] text-white">
//               <tr className="text-sm lg:text-base">
//                 <th className="border p-3">Name</th>
//                 <th className="border p-3">Email</th>
//                 <th className="border p-3">Phone</th>
//                 <th className="border p-3">Country</th>
//                 <th className="border p-3">State</th>
//                 <th className="border p-3">City</th>
//                 <th className="border p-3">Service</th>
//                 <th className="border p-3">Message</th>
//                 <th className="border p-3">Date/Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {responses.length > 0 ? (
//                 responses.map((response) => (
//                   <tr key={response._id} className="text-center text-sm lg:text-base">
//                     <td className="border p-3">{response.name}</td>
//                     <td className="border p-3">{response.email}</td>
//                     <td className="border p-3">{response.phone}</td>
//                     <td className="border p-3">{response.country}</td>
//                     <td className="border p-3">{response.state}</td>
//                     <td className="border p-3">{response.city}</td>
//                     <td className="border p-3">{response.service}</td>
//                     <td className="border p-3 max-w-xs">
//                       <div className="overflow-x-auto whitespace-nowrap p-2">
//                         {response.message}
//                       </div>
//                     </td>
//                     <td className="border p-3">
//                       {new Date(response.createdAt).toLocaleString()}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="9" className="text-center p-4 text-gray-500">
//                     No recent responses
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* MOBILE VIEW */}
//         <div className="md:hidden mt-6 space-y-4">
//           {responses.map((response) => (
//             <div
//               key={response._id}
//               className="bg-white shadow-md rounded-lg p-4 border"
//             >
//               <p><strong>Name:</strong> {response.name}</p>
//               <p><strong>Email:</strong> {response.email}</p>
//               <p><strong>Phone:</strong> {response.phone}</p>
//               <p><strong>Country:</strong> {response.country}</p>
//               <p><strong>State:</strong> {response.state}</p>
//               <p><strong>City:</strong> {response.city}</p>
//               <p><strong>Service:</strong> {response.service}</p>
//               <p><strong>Message:</strong> {response.message}</p>
//               <p className="text-sm text-gray-500">
//                 {new Date(response.createdAt).toLocaleString()}
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-6">
//           <button
//             onClick={() => navigate("/response")}
//             className="bg-[#E5A24A] hover:bg-[#c7873a] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
//           >
//             View All Responses
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AdminHome;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderAdmin from "./HeaderAdmin";
import Footer from "../components/Footer";

const AdminHome = () => {
  const [responses, setResponses] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    navigate("/admin-login");
    return;
  }

  axios
    .get(`${process.env.REACT_APP_API_URL}/contact`, {
      headers: { Authorization: `Bearer ${token}` }, // ✅ Include token
    })
    .then((res) => {
      const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setResponses(sorted.slice(0, 5));
    })
    .catch((err) => {
      console.error("Error fetching responses", err);
      if (err.response?.status === 401) navigate("/admin-login");
    });
}, [navigate]);


  return (
    <>
      <HeaderAdmin />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-semibold text-[#0B3159] text-center mb-6">
          Admin Dashboard
        </h2>
        <h3 className="text-2xl font-semibold text-[#0B3159] mb-4">
          Top Responses
        </h3>

        {/* TABLE FOR DESKTOP */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
            <thead className="bg-[#0B3159] text-white">
              <tr className="text-sm lg:text-base">
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Phone</th>
                <th className="border p-3">Country</th>
                <th className="border p-3">State</th>
                <th className="border p-3">City</th>
                <th className="border p-3">Service</th>
                <th className="border p-3">Message</th>
                <th className="border p-3">Date/Time</th>
              </tr>
            </thead>
            <tbody>
              {responses.length > 0 ? (
                responses.map((response) => (
                  <tr key={response._id} className="text-center text-sm lg:text-base">
                    <td className="border p-3">{response.name}</td>
                    <td className="border p-3">{response.email}</td>
                    <td className="border p-3">{response.phone}</td>
                    <td className="border p-3">{response.country}</td>
                    <td className="border p-3">{response.state}</td>
                    <td className="border p-3">{response.city}</td>
                    <td className="border p-3">{response.service}</td>
                    <td className="border p-3 max-w-xs">
                      <div className="overflow-x-auto whitespace-nowrap p-2">
                        {response.message}
                      </div>
                    </td>
                    <td className="border p-3">
                      {new Date(response.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center p-4 text-gray-500">
                    No recent responses
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden mt-6 space-y-4">
          {responses.map((response) => (
            <div
              key={response._id}
              className="bg-white shadow-md rounded-lg p-4 border"
            >
              <p><strong>Name:</strong> {response.name}</p>
              <p><strong>Email:</strong> {response.email}</p>
              <p><strong>Phone:</strong> {response.phone}</p>
              <p><strong>Country:</strong> {response.country}</p>
              <p><strong>State:</strong> {response.state}</p>
              <p><strong>City:</strong> {response.city}</p>
              <p><strong>Service:</strong> {response.service}</p>
              <p><strong>Message:</strong> {response.message}</p>
              <p className="text-sm text-gray-500">
                {new Date(response.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/response")}
            className="bg-[#E5A24A] hover:bg-[#c7873a] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            View All Responses
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminHome;



