import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
