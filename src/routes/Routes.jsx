import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Registercoach from "../pages/Registercoach";
import UserDashboard from "../pages/UserDashboard";
import NotFound from "../pages/NotFound";
import FilterChoice from "../pages/FilterChoice";
import Coachdash from "../pages/Coachdashboard";
import Coachbookingdash from "../pages/Coachbookingdashboard";
import Coachchatdash from "../pages/Coachchatdashboard";
import Coachsettingsdash from "../pages/Coachsettingsdashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} /> 
      <Route path="/registercoach" element={<Registercoach />} />
      <Route path="/coach/dashboard" element={<Coachdash />} />
      <Route path="/coach/bookings" element={<Coachbookingdash />} />
      <Route path="/coach/chats" element={<Coachchatdash />} />
      <Route path="/coach/Settings" element={<Coachsettingsdash />} />
      <Route path="/homepage" element={<HomePage />} /> 
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/aboutus" element={<AboutUs />} />  
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user-dashboard" element = {<UserDashboard/>}/>
      <Route path="*" element={<NotFound/>} />
      <Route path="/find-a-coach" element ={<FilterChoice/>}/>
    </Routes>
  );
};

export default Router;