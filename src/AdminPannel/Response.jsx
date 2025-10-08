// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import HeaderAdmin from "./HeaderAdmin";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";


// const Response = () => {
//   const [responses, setResponses] = useState([]);
//   const navigate = useNavigate();

// useEffect(() => {
//   const token = localStorage.getItem("adminToken");
//   if (!token) {
//     navigate("/admin-login");
//     return;
//   }

//   axios
//     .get(`${process.env.REACT_APP_API_URL}/contact`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     .then((res) => {
//       const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//       setResponses(sorted);
//     })
//     .catch((err) => {
//       console.error("Error fetching responses", err);
//       if (err.response?.status === 401) navigate("/admin-login");
//     });
// }, [navigate]);


//   return (
//     <>
//       <HeaderAdmin />
//       <div className="max-w-7xl mx-auto p-6">
//         <h2 className="text-3xl font-semibold text-[#0B3159] text-center mb-6">
//           All Responses
//         </h2>

//         {/* TABLE VIEW */}
//         <div className="hidden md:block ">
//           <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
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
//                   <tr
//                     key={response._id}
//                     className="text-center text-sm lg:text-base"
//                   >
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
//                   <td colSpan="9" className="text-center text-gray-500 p-4">
//                     No response yet
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
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Response;

import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "./HeaderAdmin";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Response = () => {
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
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const sorted = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setResponses(sorted);
      })
      .catch((err) => {
        console.error("Error fetching responses", err);
        if (err.response?.status === 401) navigate("/admin-login");
      });
  }, [navigate]);

  return (
    <>
      <HeaderAdmin />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B3159] text-center mb-6">
          All Responses
        </h2>

        {/* TABLE VIEW - DESKTOP & TABLET */}
        <div className="overflow-x-auto hidden md:block">
          <table className="min-w-full border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-[#0B3159] text-white">
              <tr className="text-xs sm:text-sm lg:text-base">
                <th className="border p-2 sm:p-3">Name</th>
                <th className="border p-2 sm:p-3">Email</th>
                <th className="border p-2 sm:p-3">Phone</th>
                <th className="border p-2 sm:p-3">Country</th>
                <th className="border p-2 sm:p-3">State</th>
                <th className="border p-2 sm:p-3">City</th>
                <th className="border p-2 sm:p-3">Service</th>
                <th className="border p-2 sm:p-3 max-w-xs">Message</th>
                <th className="border p-2 sm:p-3">Date/Time</th>
              </tr>
            </thead>
            <tbody>
              {responses.length > 0 ? (
                responses.map((response) => (
                  <tr
                    key={response._id}
                    className="text-xs sm:text-sm lg:text-base text-center hover:bg-gray-50"
                  >
                    <td className="border p-2 sm:p-3">{response.name}</td>
                    <td className="border p-2 sm:p-3">{response.email}</td>
                    <td className="border p-2 sm:p-3">{response.phone}</td>
                    <td className="border p-2 sm:p-3">{response.country}</td>
                    <td className="border p-2 sm:p-3">{response.state}</td>
                    <td className="border p-2 sm:p-3">{response.city}</td>
                    <td className="border p-2 sm:p-3">{response.service}</td>
                    <td className="border p-2 sm:p-3 max-w-xs">
                      <div className="overflow-x-auto whitespace-normal">
                        {response.message}
                      </div>
                    </td>
                    <td className="border p-2 sm:p-3">
                      {new Date(response.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center text-gray-500 p-4">
                    No response yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden mt-4 space-y-4">
          {responses.length > 0 ? (
            responses.map((response) => (
              <div
                key={response._id}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                <p className="text-sm sm:text-base"><strong>Name:</strong> {response.name}</p>
                <p className="text-sm sm:text-base"><strong>Email:</strong> {response.email}</p>
                <p className="text-sm sm:text-base"><strong>Phone:</strong> {response.phone}</p>
                <p className="text-sm sm:text-base"><strong>Country:</strong> {response.country}</p>
                <p className="text-sm sm:text-base"><strong>State:</strong> {response.state}</p>
                <p className="text-sm sm:text-base"><strong>City:</strong> {response.city}</p>
                <p className="text-sm sm:text-base"><strong>Service:</strong> {response.service}</p>
                <p className="text-sm sm:text-base"><strong>Message:</strong> {response.message}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  {new Date(response.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No response yet</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Response;

