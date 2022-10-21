import React from "react";

function PartFormInput({ clicked, stateVariable, stateSetter, label }) {
  console.log(clicked.parameter_dict[label]);
  return clicked.parameter_dict[label] ? (
    <div className="input_container">
      <label>{clicked.parameter_dict[label].label}</label>
      <input
        value={stateVariable}
        onChange={(e) => stateSetter(e.target.value)}
      ></input>
    </div>
  ) : null;
}

export default PartFormInput;
