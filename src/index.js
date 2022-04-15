import React from 'react';
import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Login from './login';
// import Register from './Register';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      {/* <Route path="register" element={<Register />} /> */}
    </Routes>
  </BrowserRouter>,
  rootElement
);

