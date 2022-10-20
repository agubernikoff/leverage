import React from "react";

function PartFormInput({ clicked, stateVariable, stateSetter, label }) {
  return clicked.parameter_dict.includes(label) ? (
    <div className="input_container">
      <label>{label}</label>
      <input
        value={stateVariable}
        onChange={(e) => stateSetter(e.target.value)}
      ></input>
    </div>
  ) : null;
}

export default PartFormInput;
