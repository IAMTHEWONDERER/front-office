import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Router from "./routes/Routes";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound"; 
import { useLocation } from 'react-router-dom';
function App() {
  // const location = useLocation();
  //   const isNotFoundPage = location.pathname === '*';

  return (
    
    <BrowserRouter>
            <Layout />
      {/* <Router/> */}
    </BrowserRouter>
  );
}

export default App;
