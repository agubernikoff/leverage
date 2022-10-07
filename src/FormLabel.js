import React from "react";

function FormLabel({ direction }) {
  return (
    <div className="form-label">
      <span>Grid Name - {direction}</span>
      <span>Offset in Inches</span>
    </div>
  );
}

export default FormLabel;
