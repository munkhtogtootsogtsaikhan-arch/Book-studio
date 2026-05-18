import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AudioBooks from "./pages/AudioBooks";

function PrivateRoute({ children }) {
  const user = localStorage.getItem("user");

  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/audio"
          element={
            <PrivateRoute>
              <AudioBooks />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}