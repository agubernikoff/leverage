import React, { useState } from "react";
import PartFormInput from "./PartFormInput";

function PartForm({ closeForm, clicked }) {
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
        <strong>{clicked.shapeTitle}</strong>
        <PartFormInput
          label="sWidth"
          stateVariable={sWidth}
          stateSetter={setSWidth}
          clicked={clicked}
        />
        <PartFormInput
          label="sDepth"
          stateVariable={sDepth}
          stateSetter={setSDepth}
          clicked={clicked}
        />
        <PartFormInput
          label="sLength"
          stateVariable={sLength}
          stateSetter={setSLength}
          clicked={clicked}
        />
        <PartFormInput
          label="sThickness"
          stateVariable={sThickness}
          stateSetter={setSThickness}
          clicked={clicked}
        />
        <PartFormInput
          label="shiftStart"
          stateVariable={shiftStart}
          stateSetter={setShiftStart}
          clicked={clicked}
        />
        <PartFormInput
          label="sReturn"
          stateVariable={sReturn}
          stateSetter={setSReturn}
          clicked={clicked}
        />
        <PartFormInput
          label="uReturn"
          stateVariable={uReturn}
          stateSetter={setUReturn}
          clicked={clicked}
        />
        <PartFormInput
          label="webThickness"
          stateVariable={webThickness}
          stateSetter={setWebThickness}
          clicked={clicked}
        />
        <PartFormInput
          label="flangeThickness"
          stateVariable={flangeThickness}
          stateSetter={setFlangeThickness}
          clicked={clicked}
        />
        <PartFormInput
          label="cornerRadius"
          stateVariable={cornerRadius}
          stateSetter={setCornerRadius}
          clicked={clicked}
        />
        <PartFormInput
          label="outsideR"
          stateVariable={outsideR}
          stateSetter={setOutsideR}
          clicked={clicked}
        />
        <PartFormInput
          label="insideR"
          stateVariable={insideR}
          stateSetter={setInsideR}
          clicked={clicked}
        />
        <PartFormInput
          label="holeRadius"
          stateVariable={holeRadius}
          stateSetter={setHoleRadius}
          clicked={clicked}
        />
        <PartFormInput
          label="holeSpacing"
          stateVariable={holeSpacing}
          stateSetter={setHoleSpacing}
          clicked={clicked}
        />
        <PartFormInput
          label="autoEdge"
          stateVariable={autoEdge}
          stateSetter={setAutoEdge}
          clicked={clicked}
        />
        <PartFormInput
          label="holeDiameter"
          stateVariable={holeDiameter}
          stateSetter={setHoleDiameter}
          clicked={clicked}
        />
        <PartFormInput
          label="holeQuantity"
          stateVariable={holeQuantity}
          stateSetter={setHoleQuantity}
          clicked={clicked}
        />
        <PartFormInput
          label="holeHeight"
          stateVariable={holeHeight}
          stateSetter={setHoleHeight}
          clicked={clicked}
        />
        <PartFormInput
          label="sEdgePosition"
          stateVariable={sEdgePosition}
          stateSetter={setSEdgePosition}
          clicked={clicked}
        />
        <PartFormInput
          label="sHeightCategory"
          stateVariable={sHeightCategory}
          stateSetter={setSHeightCategory}
          clicked={clicked}
        />
        <PartFormInput
          label="complexEdge"
          stateVariable={complexEdge}
          stateSetter={setComplexEdge}
          clicked={clicked}
        />
        <PartFormInput
          label="complexEdgeA"
          stateVariable={complexEdgeA}
          stateSetter={setComplexEdgeA}
          clicked={clicked}
        />
        <PartFormInput
          label="complexEdgeB"
          stateVariable={complexEdgeB}
          stateSetter={setComplexEdgeB}
          clicked={clicked}
        />
        <PartFormInput
          label="complexEdgeC"
          stateVariable={complexEdgeC}
          stateSetter={setComplexEdgeC}
          clicked={clicked}
        />
        <PartFormInput
          label="complexEdgeD"
          stateVariable={complexEdgeD}
          stateSetter={setComplexEdgeD}
          clicked={clicked}
        />
        <PartFormInput
          label="complexEdgeE"
          stateVariable={complexEdgeE}
          stateSetter={setComplexEdgeE}
          clicked={clicked}
        />
        <PartFormInput
          label="startSlope"
          stateVariable={startSlope}
          stateSetter={setStartSlope}
          clicked={clicked}
        />
        <PartFormInput
          label="endSlope"
          stateVariable={endSlope}
          stateSetter={setEndSlope}
          clicked={clicked}
        />
        <button className="form_submit_button">Submit</button>
      </form>
    </div>
  );
}

export default PartForm;
