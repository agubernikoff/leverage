import React, { useState } from "react";

function PartForm({ closeForm }) {
  const [sWidth, setSWidth] = useState("");
  const [sDepth, setSDepth] = useState("");
  const [sLength, setSLength] = useState("");
  const [sThickness, setSThickness] = useState("");
  const [shiftStart, setShiftStart] = useState("");
  const [sReturn, setSReturn] = useState("");
  const [uReturn, setUReturn] = useState("");
  const [webThickness, setWebThickness] = useState("");
  const [flangeThickness, setFlangeThickness] = useState("");
  const [cornerRadius, setCornerRadius] = useState("");
  const [outsideR, setOutsideR] = useState("");
  const [insideR, setInsideR] = useState("");
  const [holeRadius, setHoleRadius] = useState("");
  const [holeSpacing, setHoleSpacing] = useState("");
  const [autoEdge, setAutoEdge] = useState("");
  const [holeDiameter, setHoleDiameter] = useState("");
  const [holeQuantity, setHoleQuantity] = useState("");
  const [holeHeight, setHoleHeight] = useState("");
  const [sEdgePosition, setSEdgePosition] = useState("");
  const [sHeightCategory, setSHeightCategory] = useState("");
  const [complexEdge, setComplexEdge] = useState("");
  const [complexEdgeA, setComplexEdgeA] = useState("");
  const [complexEdgeB, setComplexEdgeB] = useState("");
  const [complexEdgeC, setComplexEdgeC] = useState("");
  const [complexEdgeD, setComplexEdgeD] = useState("");
  const [complexEdgeE, setComplexEdgeE] = useState("");
  const [startSlope, setStartSlope] = useState("");
  const [endSlope, setEndSlope] = useState("");
  return (
    <div className="form_container">
      <button onClick={closeForm}>X</button>
      <form className="part_form">
        <h3>Part Edit Form</h3>
        <div className="input_container">
          <label>sWidth</label>
          <input
            value={sWidth}
            onChange={(e) => setSWidth(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>sDepth</label>
          <input
            value={sDepth}
            onChange={(e) => setSDepth(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>sLength</label>
          <input
            value={sLength}
            onChange={(e) => setSLength(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>sThickness</label>
          <input
            value={sThickness}
            onChange={(e) => setSThickness(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>shiftStart</label>
          <input
            value={shiftStart}
            onChange={(e) => setShiftStart(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>sReturn</label>
          <input
            value={sReturn}
            onChange={(e) => setSReturn(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>uReturn</label>
          <input
            value={uReturn}
            onChange={(e) => setUReturn(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>webThickness</label>
          <input
            value={webThickness}
            onChange={(e) => setWebThickness(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>flangeThickness</label>
          <input
            value={flangeThickness}
            onChange={(e) => setFlangeThickness(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>cornerRadius</label>
          <input
            value={cornerRadius}
            onChange={(e) => setCornerRadius(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>outsideR</label>
          <input
            value={outsideR}
            onChange={(e) => setOutsideR(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>insideR</label>
          <input
            value={insideR}
            onChange={(e) => setInsideR(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>holeRadius</label>
          <input
            value={holeRadius}
            onChange={(e) => setHoleRadius(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>holeSpacing</label>
          <input
            value={holeSpacing}
            onChange={(e) => setHoleSpacing(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>autoEdge</label>
          <input
            value={autoEdge}
            onChange={(e) => setAutoEdge(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>holeDiameter</label>
          <input
            value={holeDiameter}
            onChange={(e) => setHoleDiameter(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>holeQuantity</label>
          <input
            value={holeQuantity}
            onChange={(e) => setHoleQuantity(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>holeHeight</label>
          <input
            value={holeHeight}
            onChange={(e) => setHoleHeight(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>sEdgePosition</label>
          <input
            value={sEdgePosition}
            onChange={(e) => setSEdgePosition(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>sHeightCategory</label>
          <input
            value={sHeightCategory}
            onChange={(e) => setSHeightCategory(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>complexEdge</label>
          <input
            value={complexEdge}
            onChange={(e) => setComplexEdge(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>complexEdgeA</label>
          <input
            value={complexEdgeA}
            onChange={(e) => setComplexEdgeA(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>complexEdgeB</label>
          <input
            value={complexEdgeB}
            onChange={(e) => setComplexEdgeB(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>complexEdgeC</label>
          <input
            value={complexEdgeC}
            onChange={(e) => setComplexEdgeC(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>complexEdgeD</label>
          <input
            value={complexEdgeD}
            onChange={(e) => setComplexEdgeD(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>complexEdgeE</label>
          <input
            value={complexEdgeE}
            onChange={(e) => setComplexEdgeE(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>startSlope</label>
          <input
            value={startSlope}
            onChange={(e) => setStartSlope(e.target.value)}
          ></input>
        </div>
        <div className="input_container">
          <label>endSlope</label>
          <input
            value={endSlope}
            onChange={(e) => setEndSlope(e.target.value)}
          ></input>
        </div>
        <button className="form_submit_button">Submit</button>
      </form>
    </div>
  );
}

export default PartForm;
