import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
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
    </Routes>
  );
};

export default Router;