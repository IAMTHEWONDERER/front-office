import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
// import About from "../pages/about";
// import Tour from "../pages/tour";
// import Camping from "../pages/camping";
// import Login from "../pages/login";
// import Register from "../pages/register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} /> 
      <Route path="/services" element={<ServicesPage />} /> 
    </Routes>
  );
};

export default Router;