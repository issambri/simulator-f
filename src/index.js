import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Simulator from './pages/Simulator';
import Cookies from "js-cookie";

const root = ReactDOM.createRoot(document.getElementById('root'));
const jwt = Cookies.get('jwt')

function PrivateRoute() {
  return jwt ? <Simulator /> : <Navigate to="/login" />;
}

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="simulator" element={<PrivateRoute />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
