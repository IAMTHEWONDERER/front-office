import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import AboutUs from "../pages/AboutUs";

// import About from "../pages/about";
// import Tour from "../pages/tour";
// import Camping from "../pages/camping";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDashboard from "../pages/UserDashboard";
import NotFound from "../pages/NotFound";
import FilterChoice from "../pages/FilterChoice";
import CoachProfile from "../pages/CoachProfile";

const id = 1;

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} /> 

      <Route path="/registercoach" element={<Registercoach />} />
      <Route path="/coach/dashboard" element={<Coachdash />} />
      <Route path="/homepage" element={<HomePage />} /> 
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/aboutus" element={<AboutUs />} />  
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user-dashboard" element = {<UserDashboard/>}/>
      <Route path="*" element={<NotFound/>} />
      <Route path="/findacoach" element ={<FilterChoice/>}/>
      <Route path={`/findacoach/profile/${id}`} element={<CoachProfile />} />   
    </Routes>
  );
};

export default Router;