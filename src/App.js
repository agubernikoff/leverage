import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
