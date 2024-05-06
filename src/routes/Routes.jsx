import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Registercoach from "../pages/Registercoach";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} /> 
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about-us" element={<AboutUs />} />  
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registercoach" element={<Registercoach />} />
    </Routes>
  );
};

export default Router;