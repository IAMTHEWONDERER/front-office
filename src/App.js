import React from 'react';
import { Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
function App(){
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          <Route path="/homepage" element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;