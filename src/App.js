import React from 'react';
import { Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import Layout from './components/Layout'
function App(){
  return (
    <BrowserRouter>
       <Layout/>
    </BrowserRouter>
  );
};

export default App;