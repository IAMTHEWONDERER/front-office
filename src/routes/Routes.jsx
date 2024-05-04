import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import AboutUs from "../pages/AboutUs";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} /> 
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about-us" element={<AboutUs />} />  
    </Routes>
  );
};

export default Router;