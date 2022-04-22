import React from 'react';
import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Update from './Update';
import Login from './Login';
import Register from './Register';
import SendMessage from './SendMessage';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Update />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sendmessage" element={<SendMessage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

