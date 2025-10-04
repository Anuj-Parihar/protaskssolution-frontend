

// import { Routes, Route, useLocation } from "react-router-dom"; 
// import { useEffect } from "react";
// import Home from "./pages/Home";
// import Services from './pages/Services';
// // import EachService from './pages/EachService';
// import About from './pages/About';
// import ContactUs from './pages/ContactUs';
// import Response from "./AdminPannel/Response";
// import Login from "./AdminPannel/Login";
// import PageNotFound from "./components/PageNotFound";
// import AdminHome from "./AdminPannel/AdminHome";
// import Settings from "./AdminPannel/Settings";
// import ServiceDetail from "./pages/ServiceDetail";

// function App() {
//   const location = useLocation();

//   // ✅ Scroll to top whenever route changes
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   return (
//     <>
//       <div className="">
//         <Routes>
//           {/* Standard Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           {/* <Route path="/service/:serviceKey" element={<EachService />} /> */}
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/admin-login" element={<Login />} />
//           <Route path="/response" element={<Response />} />
//           <Route path="/admin-home" element={<AdminHome />} />
//           <Route path="/admin-settings" element={<Settings />} />
//           <Route path="/service/:serviceKey" element={<ServiceDetail />} />

//           {/* 404 Page Not Found */}
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Response from "./AdminPannel/Response";
import Login from "./AdminPannel/Login";
import AdminHome from "./AdminPannel/AdminHome";
import Settings from "./AdminPannel/Settings";
import PageNotFound from "./components/PageNotFound";
import ServiceDetail from "./pages/ServiceDetail";
import ProtectedRoute from "./AdminPannel/ProtectedRoute";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/admin-login" element={<Login />} />
      <Route path="/service/:serviceKey" element={<ServiceDetail />} />

      {/* Protected Admin Routes */}
      <Route
        path="/admin-home"
        element={
          <ProtectedRoute>
            <AdminHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/response"
        element={
          <ProtectedRoute>
            <Response />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin-settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

