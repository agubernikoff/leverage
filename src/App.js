import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import ViewGridDimensions from "./ViewGridDimensions";
import MakeANewPart from "./MakeANewPart";

function App() {
  const [EWgrid, setEWgrid] = useState([]);
  const [grid, setGrid] = useState([]);
  const [prototypes, setPrototypes] = useState([]);
  useEffect(() => {
    fetch(
      "http://174.127.250.86/LAC_uiapp/lac-define-grid-EW/listDataJSON?format=json"
    )
      .then((r) => r.json())
      .then((data) => setEWgrid(data));
    fetch(
      "http://174.127.250.86/LAC_uiapp/lac-define-grid-EW/listDataJSON_NS?format=json"
    )
      .then((r) => r.json())
      .then((data) => console.log(data));
    fetch(
      "http://174.127.250.86/LAC_uiapp/lac-define-grid-EW/listGridPointsJSON?format=json"
    )
      .then((r) => r.json())
      .then((data) => setGrid(data.point_data));
    fetch(
      "http://174.127.250.86/LAC_uiapp/lac-define-grid-EW/listParametersJSON?format=json"
    )
      .then((r) => r.json())
      .then((data) => setPrototypes(data));
  }, []);

  function append() {
    setEWgrid([...EWgrid, { tag_name: "", offset_in: "" }]);
  }

  function deleteRow(gridName) {
    setEWgrid(EWgrid.filter((r) => r.tag_name !== gridName));
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          exact
          path="/form"
          element={<Form data={EWgrid} append={append} deleteRow={deleteRow} />}
        />
        <Route
          exact
          path="/view_grid"
          element={<ViewGridDimensions dimensions={grid} />}
        />
        <Route
          exact
          path="/makeanewpart"
          element={<MakeANewPart prototypes={prototypes} />}
        />
      </Routes>
    </div>
  );
}

export default App;
