import {Routes, Route, Switch } from 'react-router-dom';
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
import UserSettings from '../pages/Settings';
import ProtectedRoute from '../components/ProtectedRoute';




const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} /> 
      <Route path="/homepage" element={<HomePage />} /> 
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/user/services" element={<ServicesPage />} />
      <Route path="/user/aboutus" element={<AboutUs />} />  
      <Route path="/aboutus" element={<AboutUs />} />  
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/dashboard" element = {<UserDashboard/>}/>
      <Route path="*" element={<NotFound/>} />
      <Route path="/findacoach" element ={<FilterChoice/>}/>
      <Route path={`/findacoach/profile`} element={<CoachProfile />} />   
      <Route path="/login" element={<Login />} />
        <Route 
          path="/user/settings" 
          element={<ProtectedRoute element={<UserSettings />} />} 
        />
    </Routes>
  );
};

export default Router;